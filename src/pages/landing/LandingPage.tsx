import React from "react";
import HeroSection from "../../components/landing/hero/HeroSection";
import ToolSection from "../../components/landing/tools/ToolSection";
import BlogSection from "./blog/BlogSection";
import ContactSection from "./contact/ContactSection";
import WorkSection from "./works/WorkSection";

import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <ContactSection />

      {/* <HeroSection />
      <WorkSection />
      <ToolSection />
      <BlogSection /> */}
    </div>
  );
};

export default LandingPage;
