import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Header";

import { FaBook } from "react-icons/fa";

import styles from "./WorkSection.module.scss";
import { useAppSelector } from "../../features/app/hooks";
import { ThemeType } from "../../types/theme";

const WorkSection = () => {
  const theme = useAppSelector((state) => state.theme);

  const TITLE = "Project Title";

  const CONTENT =
    "Website is still under construction... here will be a short summary about the project and a link to it";

  return (
    <section id="works" className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Container fluid className={styles.container}>
        <Col>
          <Row>
            <div className={styles.header}>
              <Header
                content={"My Works"}
                icon={<FaBook />}
                sectionLink="#works"
              />
            </div>
            <h4 className={styles.header}></h4>
          </Row>
          <Row>
            <Col lg={12} md={6}>
              <Card className={styles.card}>
                <Card.Img
                  alt="work1"
                  variant="top"
                  className={styles.img}
                  src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title className={styles.title}>{TITLE}</Card.Title>
                  <Card.Text className={styles.text}>{CONTENT}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12} md={6}>
              <Card className={styles.card}>
                <Card.Img
                  alt="work2"
                  variant="top"
                  className={styles.img}
                  src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body>
                  <Card.Title className={styles.title}>{TITLE}</Card.Title>
                  <Card.Text className={styles.text}>{CONTENT}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default WorkSection;
