import React, { FormEvent } from 'react';

import emailjs from '@emailjs/browser';

import { Form, Button } from 'react-bootstrap';
import { useAppSelector } from '../../features/app/hooks';
import { ThemeType } from '../../types/theme';

import styles from './ContactForm.module.scss';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVER_ID,
  EMAILJS_TEMPLATE_ID
} from '../../utils/constants';

const ContactForm = () => {
  const theme = useAppSelector((state) => state.theme);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const description = (form.elements.namedItem('content') as HTMLInputElement)
      .value;

    emailjs
      .send(
        EMAILJS_SERVER_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: 'dorletz',
          from_email: email,
          message: description
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('message sent :)');
      })
      .catch((error) => alert(JSON.stringify(error)));
  };

  return (
    <div className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group className={styles.group}>
          <Form.FloatingLabel label='Full Name' className={styles.label}>
            <Form.Control
              required
              name='name'
              type='text'
              placeholder='Jon Doe'
              className={styles.control}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group className={styles.group}>
          <Form.FloatingLabel label='Email' className={styles.label}>
            <Form.Control
              required
              name='email'
              type='email'
              placeholder='mycooladdress@email.com'
              className={styles.control}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group className={styles.group}>
          <Form.FloatingLabel label='Description' className={styles.label}>
            <Form.Control
              required
              name='content'
              className={styles.text_area_control}
              as='textarea'
              placeholder='Hello World'
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Button type='submit' className={styles.button}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
