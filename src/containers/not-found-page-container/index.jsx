import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

function NotFoundPageContainer() {
  return (
    <S.NotFoundPageContainer>
      <S.Title> 404 Page Not Found...</S.Title>
      <Link to="/">Go home</Link>
    </S.NotFoundPageContainer>
  );
}

export { NotFoundPageContainer };
