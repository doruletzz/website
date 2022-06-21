import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { FaToolbox } from 'react-icons/fa';
import { useAppSelector } from '../../../features/app/hooks';
import { ThemeType } from '../../../types/theme';
import Header from '../../Header';

import frontEndIcon from '../../../assets/front-end-illustration.png';
import frontEndIconDark from '../../../assets/front-end-illustration-dark.png';

import backEndIcon from '../../../assets/back-end-illustration.png';
import backEndIconDark from '../../../assets/back-end-illustration-dark.png';

import otherIcon from '../../../assets/other-illustration.png';
import otherIconDark from '../../../assets/other-illustration-dark.png';

import ToolsIllustration from '../../../assets/tools-illustration.svg';
import ToolsIllustrationDark from '../../../assets/tools-illustration-dark.svg';

import styles from './ToolSection.module.scss';

const ToolSection = () => {
  const frontendTitle = 'Frontend';
  const backendTitle = 'Backend';
  const otherTitle = 'Other';

  const frontendSkills =
    'React, Typescript, Html, Css, Sass, Javascript, Jest, Junit,  Bootstrap, Axios';
  const frontendSkillsMobile = 'React, Typescript, Html ...';

  const backendSkills =
    'Java, Python, Node.js, Flask, Hibernate, MySql, SQLite';

  const otherSkills = 'Linux, Github, Figma, Adobe CS, Framer Motion, VSCode';

  const theme = useAppSelector((state) => state.theme);

  return (
    <section id='tools'>
      <div className={styles[`theme__${ThemeType[theme.type]}`]}>
        <Container fluid className={styles.container}>
          <Row>
            <Col lg={7} xs={12} className={styles.cards}>
              <Row>
                <Image
                  src={ToolsIllustration}
                  className={styles.tools_illustration}
                />
              </Row>
              <Row>
                <Col lg={4} md={4} xs={12}>
                  <Card className={styles.card}>
                    <Card.Body>
                      <Card.Title className={styles.card_title}>
                        {frontendTitle}
                      </Card.Title>
                      <Card.Text className={styles.card_text}>
                        {frontendSkills}
                      </Card.Text>
                    </Card.Body>
                    <Card.Img
                      className={styles.card_icon}
                      src={
                        theme.type === ThemeType.dark
                          ? frontEndIconDark
                          : frontEndIcon
                      }
                    />
                  </Card>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <Card className={styles.card}>
                    <Card.Body>
                      <Card.Title className={styles.card_title}>
                        {backendTitle}
                      </Card.Title>
                      <Card.Text className={styles.card_text}>
                        {backendSkills}
                      </Card.Text>
                    </Card.Body>
                    <Card.Img
                      className={styles.card_icon}
                      src={
                        theme.type === ThemeType.dark
                          ? backEndIconDark
                          : backEndIcon
                      }
                    />
                  </Card>
                </Col>
                <Col lg={4} md={4} xs={12}>
                  <Card className={styles.card}>
                    <Card.Body>
                      <Card.Title className={styles.card_title}>
                        {otherTitle}
                      </Card.Title>
                      <Card.Text className={styles.card_text}>
                        {otherSkills}
                      </Card.Text>
                    </Card.Body>
                    <Card.Img
                      className={styles.card_icon}
                      src={
                        theme.type === ThemeType.dark
                          ? otherIconDark
                          : otherIcon
                      }
                    />
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={5} xs={12} md={10} className={styles.text}>
              <div className={styles.header}>
                <Header
                  content={'Tools For The Job'}
                  icon={<FaToolbox />}
                  sectionLink='#tools'
                />
              </div>
              <h1 className={styles.heading}>
                Technologies that i use day to day
              </h1>
              <p className={styles.content}>
                My usual tech stack for building web applications is: MySQL,
                Express, React and NodeJS. I mostly focus on writing clean code,
                regardless of language or framework, and using design patters
                for creating an optimal solution.
              </p>
              <p className={styles.content}>
                My usual tech stack for building web applications is: MySQL,
                Express, React and NodeJS. I mostly focus on writing clean code,
                regardless of language or framework, and using design patters
                for creating an optimal solution.
              </p>
              <p className={styles.content}>
                My usual tech stack for building web applications is: MySQL,
                Express, React and NodeJS. I mostly focus on writing clean code,
                regardless of language or framework, and using design patters
                for creating an optimal solution.
              </p>
              <Button className={styles.btn_primary}>View Github</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ToolSection;
