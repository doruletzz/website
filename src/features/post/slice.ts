import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPost, PostError, Tag } from '../../types/post';
import { ThemeType } from '../../types/theme';
import { PAGE_SIZE, SERVER_URL } from '../../utils/constants';
import { AppThunk } from '../app/store';

type PostState = {
  posts: Array<IPost>;
  isFetching: boolean;
  error?: PostError | null;
};

const initialState: PostState = {
  posts: [],
  isFetching: false,
  error: null
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    fetchPosts: (state) => {
      state.isFetching = true;
    },
    errorFetchPosts: (state, action: PayloadAction<PostError>) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    receivePosts: (state, action: PayloadAction<Array<IPost>>) => {
      state.posts = [...state.posts, ...action.payload].filter(
        (v, i, a) => a.findIndex((v2) => v.id === v2.id) === i
      );
      state.isFetching = false;
    }
  }
});

export const { actions, reducer } = themeSlice;

export const { fetchPosts, errorFetchPosts, receivePosts } = actions;

export const getPosts = (
  tags: Array<string>,
  page: number,
  pageSize: number
): AppThunk => {
  return async (dispatch) => {
    console.log(tags);

    axios
      .get(SERVER_URL + 'post/', { params: { tags, page, pageSize } })
      .then((res) => {
        console.log(res, res.data);
        res.data.forEach((e: IPost) =>
          console.log(e, e.createdAt, e.updatedAt, typeof e.createdAt)
        );
        dispatch(receivePosts(res.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(errorFetchPosts(error));
      });
  };
};

export const getAllPosts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchPosts());

    axios
      .get(SERVER_URL + 'post/')
      .then(({ data }) => {
        console.log(data);
        data.forEach((e: IPost) =>
          console.log(e, e.createdAt, e.updatedAt, typeof e.createdAt)
        );
        dispatch(receivePosts(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(errorFetchPosts(error));
      });
  };
};

export default reducer;
