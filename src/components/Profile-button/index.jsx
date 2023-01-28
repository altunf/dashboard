import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/116505991?v=4"
        alt="Fırat Altun"
      />
      <S.Content>
        <S.Text>Fırat Altun</S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
