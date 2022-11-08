import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const NavBarComp = () => {
  const navigate = useNavigate();

  const goTo = (path: string): void => {
    navigate(path);
  };
  return (
    <S.Bar>
      <S.Item data-testid="home-nav-item" onClick={() => goTo("/")}>
        Home
      </S.Item>
      <S.Item data-testid="games-nav-item" onClick={() => goTo("/games")}>
        Jogos
      </S.Item>
      <S.Item data-testid="stores-nav-item" onClick={() => goTo("/stores")}>
        Lojas
      </S.Item>
      <S.Item
        data-testid="favorites-nav-item"
        onClick={() => goTo("/favorites")}
      >
        Favoritos
      </S.Item>
      <S.Item data-testid="about-nav-item" onClick={() => goTo("/about")}>
        Sobre
      </S.Item>
    </S.Bar>
  );
};

export const NavBar = React.memo(NavBarComp);
