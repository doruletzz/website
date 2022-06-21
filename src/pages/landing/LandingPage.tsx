import HeroSection from '../../components/landing/hero/HeroSection';
import ToolSection from '../../components/landing/tools/ToolSection';
import BlogSection from '../../components/landing/blog/BlogSection';
import ContactSection from '../../components/landing/contact/ContactSection';
import WorkSection from '../../components/works/WorkSection';

import styles from './LandingPage.module.scss';
import { Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className={styles.container}>
      <HeroSection />
      <WorkSection />
      <BlogSection />
      <ToolSection />
      <ContactSection />
    </Container>
  );
};

export default LandingPage;
