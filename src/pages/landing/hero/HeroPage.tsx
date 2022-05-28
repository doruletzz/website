import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../../features/app/hooks";
import { ThemeType } from "../../../types/theme";
import HeroIllustration from "./HeroIllustration";

import styles from "./HeroPage.module.scss";

const HeroPage = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <section id="hero" className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Container fluid className="m-0 p-0">
        <Row>
          <Col lg={9} md={8} sm={12} className={styles.content}>
            <div className={styles.header}>
              <div>
                <div className={styles.div}>
                  <span>
                    <h4 className={styles.text}>
                      LOCATED IN CLUJ-NAPOCA, ROMANIA
                      <a href={"#hero"} className={styles.icon}>-></a>
                    </h4>
                  </span>
                </div>
              </div>
            </div>
            <h1 className={styles.heading}>
              <div>
                hi, i'm doru. <br />a{" "}
                <b className={styles.highlighted}>passionate</b> frontend
                developer
              </div>
            </h1>

            <Button className={styles.btn_primary}>Latest Works</Button>
            <Button className={styles.btn_secundary}>Contact Me</Button>
          </Col>
          <Col lg={3} md={4} sm={12}>
            <div className={styles.hero_image}>
              <HeroIllustration width={"100%"} />
            </div>
            {/* <Image className={styles.hero_image} src={heroIllustration} /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroPage;
