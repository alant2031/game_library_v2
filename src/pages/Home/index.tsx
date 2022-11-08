import React from "react";
import { Jumbotron } from "components";

const HomeComp = () => {
  return (
    <div data-testid="home-page">
      <Jumbotron />
    </div>
  );
};

export const Home = React.memo(HomeComp);
