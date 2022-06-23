import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaHouseUser } from 'react-icons/fa';
import Header from '../../Header';
import { useAppSelector } from '../../../features/app/hooks';
import { ThemeType } from '../../../types/theme';
import HeroIllustration from './HeroIllustration';

import styles from './HeroSection.module.scss';
import { useNavigate } from 'react-router';

const HeroSection = () => {
  const navigate = useNavigate();
  const theme = useAppSelector((state) => state.theme);

  return (
    <section id='hero' className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Container fluid className='m-0 p-0'>
        <Row>
          <Col xl={9} lg={9} md={12} sm={12} className={styles.content}>
            <div className={styles.header}>
              <div>
                <Header
                  content={'Located In Cluj-Napoca, Romania'}
                  icon={<FaHouseUser />}
                  sectionLink='#hero'
                />
              </div>
            </div>
            <div>
              <h1 className={styles.heading}>Hello World!</h1>
              <h3 className={styles.sub_heading}>
                i'm dorletz, a <b className={styles.highlighted}>passionate</b>{' '}
                frontend developer
              </h3>
            </div>

            <Button
              onClick={() =>
                window.open('https://resume.dorletz.com', '_blank')
              }
              className={styles.btn_primary}>
              View Resume
            </Button>
            <Button
              onClick={() => window.location.assign('#contact')}
              className={styles.btn_secundary}>
              Contact Me
            </Button>
          </Col>
          <Col xl={3} lg={3} md={5} sm={6}>
            <div className={styles.hero_image}>
              <HeroIllustration width={'100%'} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
