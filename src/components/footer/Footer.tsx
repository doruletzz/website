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
          <Col sm={12} md={7}>
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

          <Col xs={4} md={2}>
            <Row className={styles.header}>
              <a>LINKS</a>
            </Row>
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
          <Col xs={4} md={2}>
            <Row className={styles.header}>
              <a>SOCIAL</a>
            </Row>
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
          <Col xs={4} md={1}>
            <Row className={styles.header}>
              <a>THEME</a>
            </Row>
            <Row>
              <NavItem
                className={styles.theme_switch}
                onClick={() => {
                  dispatch(
                    setTheme(
                      (type.valueOf() + 1) % (Object.keys(ThemeType).length / 2)
                    )
                  );
                }}>
                <a>{ThemeType[type]}</a>
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
