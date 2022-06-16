import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../features/app/hooks";
import { getAllPosts, getPosts } from "../../features/blog/slice";
import { PAGE_SIZE } from "../../utils/constants";
import BlogPostCard from "./BlogPostCard";

import styles from "./FixedBlogPostCardContainer.module.scss";

const FixedBlogPostCardContainer = () => {
  const { posts, isFetching, error } = useAppSelector((state) => state.blog);

  const dispatch = useAppDispatch();

  const FIRST_PAGE = 1;

  useEffect(() => {
    dispatch(getPosts(FIRST_PAGE, 4));
  }, []);

  if (isFetching) return <Spinner animation="border" />;

  if (error) return <p>{error.message}</p>;

  return (
    <Container fluid className="m-0 p-0">
      {posts.map(({ title, summary, createdAt, slug }, idx) => (
        <Row key={idx} className={styles.blog_post_card}>
          <Link to={"/blog/" + slug}>
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

export default FixedBlogPostCardContainer;
