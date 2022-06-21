import React from 'react';
import { Container, Col, Row, NavItem, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { ThemeType } from '../../types/theme';
import { setTheme } from '../../features/theme/slice';

import styles from './Footer.module.scss';

const Footer = () => {
  const { type } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  return (
    <footer className={styles[`theme__${ThemeType[type]}`]}>
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          <Col md={7}>
            <Row>
              <NavItem className={styles.brand}>dor-</NavItem>
            </Row>
            <Row>
              <p className={styles.description}>
                Website of Doros Doru-Lucian showcasing his personal projects,
                while also attempting to start a development blog.
              </p>
            </Row>
          </Col>

          <Col md={2}>
            <Row className={styles.header}>LINKS</Row>
            <Row
              className={styles.item}
              as={NavLink}
              target='_blank'
              href={'http://resume.dorletz.com'}>
              resume
            </Row>
            <Row className={styles.item} as={Link} to='/works'>
              works
            </Row>
            <Row className={styles.item} as={Link} to='/blog'>
              blog
            </Row>
          </Col>
          <Col md={2}>
            <Row className={styles.header}>SOCIAL</Row>
            <Row
              className={styles.item}
              as={NavLink}
              target='_blank'
              href={'https://twitter.com/dorletz'}>
              twitter
            </Row>
            <Row
              className={styles.item}
              as={NavLink}
              target='_blank'
              href={'https://www.linkedin.com/in/doru-doros-598046236/'}>
              linkedin
            </Row>
            <Row
              className={styles.item}
              as={NavLink}
              target='_blank'
              href={'https://github.com/doruletzz'}>
              github
            </Row>
            <Row
              className={styles.item}
              as={NavLink}
              target='_blank'
              href={'mailto:dorosdorulucian@gmail.com'}>
              email
            </Row>
          </Col>
          <Col md={1}>
            <Row className={styles.header}>THEME</Row>
            <Row>
              <NavItem
                className={styles.item}
                onClick={() => {
                  dispatch(
                    setTheme(
                      (type.valueOf() + 1) % (Object.keys(ThemeType).length / 2)
                    )
                  );
                }}>
                {ThemeType[type]}
              </NavItem>
            </Row>
          </Col>
        </Row>
        <Row className={styles.row}>
          <p className={styles.description}>
            Website 💻 with 💛 by me, check it out on{' '}
            <a
              target='_blank'
              href={'https://www.linkedin.com/in/doru-doros-598046236/'}>
              github
            </a>
            .
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
