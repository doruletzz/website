import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getAllPosts } from '../../features/blog/slice';
import { IPost } from '../../types/blog';

import Markdown from 'marked-react';

import styles from './BlogPost.module.scss';
import { ThemeType } from '../../types/theme';

const BlogPost = () => {
  const theme = useAppSelector((state) => state.theme);

  const { slug } = useParams();

  const { posts, isFetching, error } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  const [post, setPost] = useState<IPost | undefined>(undefined);

  useEffect(() => {
    if (!posts.length) dispatch(getAllPosts());
    else {
      setPost(posts.find((post) => post.slug === slug));
    }
  }, [posts]);

  if (isFetching) return <Spinner animation='border' />;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {post ? (
        <div className={styles[`theme__${ThemeType[theme.type]}`]}>
          <Container fluid className='m-0 p-0'>
            <Row className={styles.content}>
              <Col lg={4} md={12} xs={12}>
                <h1>{post.title}</h1>
                {post.updatedAt ? (
                  <h4>{post.updatedAt.toLocaleString()}</h4>
                ) : (
                  post.createdAt && <h4>{post.createdAt.toLocaleString()}</h4>
                )}
                {post.summary && <h4>{post.summary}</h4>}
                {post.user && <h4>{post.user}</h4>}
              </Col>
              <Col>
                <Markdown>{post.content}</Markdown>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <h4 className={styles.content}>it's fetching</h4>
      )}
    </>
  );
};

export default BlogPost;
