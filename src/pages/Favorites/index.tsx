import React from "react";

const FavoritesComp = () => {
  return <div data-testid="favorites-page">FavoritesComp</div>;
};

export const Favorites = React.memo(FavoritesComp);
