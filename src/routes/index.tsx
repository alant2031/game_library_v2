import { About, Favorites, Home, Game, Games, Stores } from "pages";
import { NotFound } from "pages/NotFound";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutesComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/game/:id" element={<Game />} />
      <Route path="/games" element={<Games />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="*" element={<Navigate replace to="/notFound" />} />
      <Route path="/notFound" element={<NotFound />} />
    </Routes>
  );
};

export const AppRoutes = React.memo(AppRoutesComp);
