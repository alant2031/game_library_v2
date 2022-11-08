//src/renderWithRouter.js
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

const renderWithRouter = (component: any) => {
  const history = createMemoryHistory();
  // console.log(history);
  return {
    ...render(
      <Router location={history.location} navigator={history}>
        {component}
      </Router>
    ),
    history,
  };
};

export default renderWithRouter;
