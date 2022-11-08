import { NavBar } from "components";
import React from "react";
import { AppRoutes } from "routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}

export default App;
