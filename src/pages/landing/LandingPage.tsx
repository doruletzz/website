import React from "react";
import HeroSection from "../../components/landing/hero/HeroSection";
import ToolSection from "../../components/landing/tools/ToolSection";
import BlogSection from "./blog/BlogSection";
import WorkSection from "./works/WorkSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ToolSection />
      <BlogSection />
    </div>
  );
};

export default LandingPage;
