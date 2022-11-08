import React from "react";

const AboutComp = () => {
  return <div data-testid="about-page">AboutComp</div>;
};

export const About = React.memo(AboutComp);
