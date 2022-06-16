import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBrain } from "react-icons/fa";
import FixedBlogPostCardContainer from "../../blog/FixedBlogPostCardContainer";
import Header from "../../Header";
import { useAppSelector } from "../../../features/app/hooks";
import { ThemeType } from "../../../types/theme";

import styles from "./BlogSection.module.scss";

const BlogSection = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <section id="blog" className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg={6} md={5}>
            <div className={styles.header}>
              <Header
                content={"Latest Thoughts"}
                icon={<FaBrain />}
                sectionLink="#blog"
              />
            </div>
            <h1 className={styles.heading}>
              Read Some of my latest blog posts.
            </h1>

            <p className={styles.content}>
              I am eager to trying out blogging, but unfortunately this section
              is currently under development. Please make sure to comeback at a
              later time to check out this section.
            </p>
            {/* <p className={styles.content}>
              Also 
            </p> */}
          </Col>
          <Col>
            <FixedBlogPostCardContainer />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
