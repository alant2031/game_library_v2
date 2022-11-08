import React from "react";

const GameComp = () => {
  return <div data-testid="game-details-page">GameComp</div>;
};

export const Game = React.memo(GameComp);
