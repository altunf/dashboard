import React from "react";
import * as S from "./styles";
import { useLoaderData } from "react-router-dom";
import { EmptyScreen } from "./empty-screen";

function TasksPageContainer() {
  const data = useLoaderData();

  return (
    <S.TasksPageContainer>
      {" "}
      {!data?.length ? <EmptyScreen /> : "listing"}
    </S.TasksPageContainer>
  );
}

export { TasksPageContainer };
