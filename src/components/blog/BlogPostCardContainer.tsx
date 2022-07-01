import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getAllPosts, getPosts } from '../../features/post/slice';
import { Tag } from '../../types/post';
import { PAGE_SIZE } from '../../utils/constants';
import BlogPostCard from './BlogPostCard';

import styles from './BlogPostCardContainer.module.scss';

const BlogPostCardContainer = () => {
  const { posts, isFetching, error } = useAppSelector((state) => state.blog);

  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  const FIRST_PAGE = 1;

  //   useEffect(() => {
  //     dispatch(getPosts(FIRST_PAGE, PAGE_SIZE));
  //   }, []);

  useEffect(() => {
    dispatch(getPosts([Tag[Tag.blog]], page, PAGE_SIZE));
  }, [page]);

  if (isFetching) return <Spinner animation='border' />;

  if (error) return <p>{error.message}</p>;

  return (
    <Container fluid className='m-0 p-0'>
      <Row>
        {posts
          .filter(
            (post) =>
              post.tags &&
              Tag[post.tags[0].toString() as keyof typeof Tag] === Tag.blog
          )
          .map(({ title, summary, createdAt, slug, tags }, idx) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              xl={6}
              key={idx}
              className={styles.blog_post_card}>
              <Link to={'/blog/' + slug}>
                <BlogPostCard
                  title={title}
                  summary={summary}
                  date={createdAt}
                  time='5 min'
                />
              </Link>
            </Col>
          ))}
        {!isFetching ? (
          <Waypoint
            onEnter={() => {
              setPage((prev: number) => prev + 1);
            }}
          />
        ) : (
          <Row className='text-center pt-2'>
            <div className='text-center'>
              <Spinner animation='border' className={styles.spinner} />
            </div>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default BlogPostCardContainer;
