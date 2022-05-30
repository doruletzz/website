import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBrain } from "react-icons/fa";
import BlogPostCardContainer from "../../../components/blog/BlogPostCardContainer";
import Header from "../../../components/Header";

import styles from "./BlogSection.module.scss";

const BlogSection = () => {
  return (
    <section id="blog">
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg={6} md={5}>
            <div className={styles.header}>
              <Header
                content={"LATEST THOUGHTS"}
                icon={<FaBrain />}
                sectionLink="#blog"
              />
            </div>
            <h1 className={styles.heading}>
              Read Some of my latest blog posts.
            </h1>

            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              sed integer pulvinar quam scelerisque. Arcu hendrerit ut aliquet
              lorem vitae sit. Ut ornare sed iaculis blandit nulla. Habitant
              maecenas maecenas arcu auctor fermentum egestas urna.
            </p>
            <p className={styles.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              lectus diam consequat, id amet enim. Auctor nulla tortor quisque
              risus. Et et, commodo at nec tellus eget fermentum vel. Enim vel
              morbi sed facilisi morbi urna, quam aliquam sed.
            </p>
          </Col>
          <Col>
            <BlogPostCardContainer />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
