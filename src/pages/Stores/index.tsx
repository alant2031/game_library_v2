import React from "react";

const StoresComp = () => {
  return <div data-testid="stores-page">StoresComp</div>;
};

export const Stores = React.memo(StoresComp);
