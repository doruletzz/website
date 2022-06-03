import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IPost, PostError } from "../../types/blog";
import { ThemeType } from "../../types/theme";
import { SERVER_URL } from "../../utils/constants";
import { AppThunk } from "../app/store";

type BlogState = {
  posts: Array<IPost>;
  isFetching: boolean;
  error?: PostError | null;
};

const initialState: BlogState = {
  posts: [],
  isFetching: false,
  error: null,
};

export const themeSlice = createSlice({
  name: "theme",
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
      state.posts = action.payload;
      state.isFetching = false;
    },
  },
});

export const { actions, reducer } = themeSlice;

export const { fetchPosts, errorFetchPosts, receivePosts } = actions;

export const getAllPosts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(fetchPosts());

    axios
      .get(SERVER_URL + "post/")
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
