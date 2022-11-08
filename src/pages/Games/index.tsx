import React from "react";

const GamesComp = () => {
  return <div data-testid="game-list-page">GamesComp</div>;
};

export const Games = React.memo(GamesComp);
