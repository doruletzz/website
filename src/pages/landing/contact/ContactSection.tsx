import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "../../../components/contact/ContactForm";

const ContactSection = () => {
  return (
    <Container className="m-0 p-0">
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <h1>Contact me</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
