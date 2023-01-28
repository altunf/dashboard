import React from "react";
import * as S from "./styles";
import { RxDashboard } from "react-icons/rx";
import { MENU } from "./constants";

function NavigationMenu() {
  return (
    <S.NavigationMenu>
      {MENU.map((item) => {
        return (
          <S.NavigationItem to={item.href} key={item.id}>
            <S.IconWrapper>
              {item.icon}
              <S.Title>{item.title}</S.Title>
            </S.IconWrapper>
          </S.NavigationItem>
        );
      })}
    </S.NavigationMenu>
  );
}

export { NavigationMenu };
