import React from "react";

import { Form, Button } from "react-bootstrap";
import { useAppSelector } from "../../features/app/hooks";
import { ThemeType } from "../../types/theme";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Form className={styles.form}>
        <Form.Group className={styles.group}>
          <Form.FloatingLabel label="Full Name" className={styles.label}>
            <Form.Control
              type="text"
              placeholder="Jon Doe"
              className={styles.control}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group className={styles.group}>
          <Form.FloatingLabel label="Email" className={styles.label}>
            <Form.Control
              type="email"
              placeholder="mycooladdress@email.com"
              className={styles.control}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group className={styles.group}>
          <Form.FloatingLabel label="Description" className={styles.label}>
            <Form.Control
              className={styles.text_area_control}
              as="textarea"
              placeholder="Hello World"
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Button className={styles.button}>Send</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
