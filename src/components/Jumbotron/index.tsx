import React from "react";
import * as S from "./styled";

const JumbotronComp = () => {
  return (
    <div data-testid="jumbotron-component">
      <S.Banner>
        <S.Heading>
          Busque seus jogos<br></br>
          Por nome, genero, favoritos e muito mais!
        </S.Heading>
        <S.Triangle />
      </S.Banner>

      <br></br>
      <S.SearchArea>
        <S.Input placeholder="Digite um jogo" />
        <br></br>
        <br></br>
        <S.Button>Buscar!</S.Button>
        <S.Ghost>Ghost</S.Ghost>
      </S.SearchArea>
    </div>
  );
};

export const Jumbotron = React.memo(JumbotronComp);
