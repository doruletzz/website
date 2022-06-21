import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import WorkPostCard from './WorkPostCard';

const WorkPostContainer = () => {
  useEffect(() => {
    dispatch(getPosts([Tag[Tag.works]], page, PAGE_SIZE));
  }, [page]);

  if (isFetching) return <Spinner animation='border' />;

  if (error) return <p>{error.message}</p>;

  const TITLE = 'Project Title';

  const IMAGE_SRC =
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const CONTENT =
    'Website is still under construction... here will be a short summary about the project and a link to it';

  return (
    <Container fluid>
      <Col lg={12} md={6}>
        <WorkPostCard
          imageSrc={IMAGE_SRC}
          title={TITLE + 'aaa'}
          summary={CONTENT}
        />
      </Col>
      <Col lg={12} md={6}>
        <WorkPostCard
          imageSrc={IMAGE_SRC}
          title={TITLE + 'aaa'}
          summary={CONTENT}
        />
      </Col>
    </Container>
  );
};

export default WorkPostContainer;
