import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../features/app/hooks";
import { getAllPosts } from "../../features/blog/slice";
import BlogPostCard from "./BlogPostCard";

import styles from "./BlogPostCardContainer.module.scss";

const BlogPostCardContainer = () => {
  const { posts, isFetching, error } = useAppSelector((state) => state.blog);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  if (isFetching) return <Spinner animation="border" />;

  if (error) return <p>{error.message}</p>;

  return (
    <Container fluid className="m-0 p-0">
      {posts.map(({ title, summary, createdAt, slug }, idx) => (
        <Row key={idx} className={styles.blog_post_card}>
          <Link to={"blog/" + slug}>
            <BlogPostCard
              title={title}
              summary={summary}
              date={createdAt}
              time="5 min"
            />
          </Link>
        </Row>
      ))}
    </Container>
  );
};

export default BlogPostCardContainer;
