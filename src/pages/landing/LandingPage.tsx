import HeroSection from "../../components/landing/hero/HeroSection";
import ToolSection from "../../components/landing/tools/ToolSection";
import BlogSection from "../../components/landing/blog/BlogSection";
import ContactSection from "../../components/landing/contact/ContactSection";
import WorkSection from "../../components/works/WorkSection";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <WorkSection />
      <ToolSection />
      <ContactSection />
      <BlogSection />
    </div>
  );
};

export default LandingPage;
