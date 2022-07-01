import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getAllPosts, getPost, getPosts } from '../../features/post/slice';
import { IPost, Tag } from '../../types/post';

import Markdown from 'marked-react';

import styles from './WorkPost.module.scss';
import { ThemeType } from '../../types/theme';

const WorkPost = () => {
  const theme = useAppSelector((state) => state.theme);

  const { slug } = useParams();

  const { posts, isFetching, error } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  const [post, setPost] = useState<IPost | undefined>(undefined);

  useEffect(() => {
    console.log(slug);
    if (!posts.length) dispatch(getPost(slug ? slug : 'hello-world'));
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
          <Container fluid>
            <Row className={styles.row}>
              <Col lg={3} md={12} xs={12} className={styles.description}>
                <h4>{post.title}</h4>
                {post.updatedAt ? (
                  <p>{post.updatedAt.toLocaleString()}</p>
                ) : (
                  post.createdAt && <p>{post.createdAt.toLocaleString()}</p>
                )}
                {post.summary && <p>{post.summary}</p>}
                {post.tags && <p>{post.tags.map((tag) => `${tag} `)}</p>}
              </Col>
              <Col className={styles.content}>
                <Markdown children={post.content} />
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

export default WorkPost;
