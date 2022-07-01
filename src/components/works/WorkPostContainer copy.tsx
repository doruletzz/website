import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { getPosts } from '../../features/post/slice';
import { Tag } from '../../types/post';
import WorkPostCard from './WorkPostCard';

const WorkPostContainer = () => {
  const { posts, isFetching, error } = useAppSelector((state) => state.blog);

  const dispatch = useAppDispatch();

  const FIRST_PAGE = 1;

  useEffect(() => {
    dispatch(getPosts([Tag[Tag.programming]], FIRST_PAGE, 2));
  }, []);

  if (isFetching) return <Spinner animation='border' />;

  if (error) return <p>{error.message}</p>;

  const TITLE = 'Project Title';

  const IMAGE_SRC =
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const CONTENT =
    'Website is still under construction... here will be a short summary about the project and a link to it';

  return (
    <Container>
      <Row>
        {posts
          .filter(
            (post) =>
              post.tags &&
              Tag[post.tags[0].toString() as keyof typeof Tag] ===
                Tag.programming
          )
          .map(({ title, summary, imageUrl, slug }) => (
            <Col lg={6} md={6}>
              <WorkPostCard
                slug={slug}
                imageSrc={imageUrl}
                title={title}
                summary={summary}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default WorkPostContainer;
