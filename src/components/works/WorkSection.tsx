import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header';

import { FaBook } from 'react-icons/fa';

import styles from './WorkSection.module.scss';
import { useAppSelector } from '../../features/app/hooks';
import { ThemeType } from '../../types/theme';
import WorkPostCard from './WorkPostCard';
import FixedWorkPostContainer from './FixedWorkPostContainer';

const WorkSection = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <section id='works' className={styles[`theme__${ThemeType[theme.type]}`]}>
      <Container fluid className={styles.container}>
        <Col>
          <Row>
            <div className={styles.header}>
              <Header
                content={'My Works'}
                icon={<FaBook />}
                sectionLink='#works'
              />
            </div>
            <h4 className={styles.header}></h4>
          </Row>
          <Row>
            <FixedWorkPostContainer amount={2} />
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default WorkSection;
