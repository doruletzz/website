import { Container, Col, Row, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import ContactForm from "../../contact/ContactForm";
import Header from "../../Header";
import { useAppSelector } from "../../../features/app/hooks";
import { ThemeType } from "../../../types/theme";

import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <section id="contact" className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Container className="m-0 p-0">
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <div className={styles.header}>
              <Header
                content={"Get In Touch"}
                icon={<FaMailBulk />}
                sectionLink="#contact"
              />
            </div>
            <h1 className={styles.heading}>Reach Out</h1>
            <p className={styles.content}>
              Want to connect? Find me online on social media or write me
              directly via email, i'm always available and eager to meeting new
              people.
            </p>

            <span>
              <Button
                onClick={() =>
                  window.location.assign("http://twitter.com/dorletz")
                }
                className={styles.button}
              >
                <FaTwitter />
              </Button>
              <Button
                onClick={() =>
                  window.location.assign("http://github.com/doruletzz")
                }
                className={styles.button}
              >
                <FaGithub />
              </Button>
              <Button
                onClick={() =>
                  window.location.assign(
                    "https://www.linkedin.com/in/doru-doros-598046236/"
                  )
                }
                className={styles.button}
              >
                <FaLinkedin />
              </Button>
              <Button
                onClick={() =>
                  window.location.assign("mailto:dorosdorulucian@gmail.com")
                }
                className={styles.button}
              >
                <IoMdMailOpen />
              </Button>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
