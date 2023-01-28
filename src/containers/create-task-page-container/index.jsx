import React from "react";
import * as S from "./styles";
import { Form } from "react-router-dom";

function CreateTaskPageContainer() {
  return (
    <S.CreateTaskPageContainer>
      <Form method="post">
        <input type="text" name="task-name" placeholder="Task name" />
        <textarea
          name="task-description"
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
        />
        <button type="submit">Submit</button>
      </Form>
    </S.CreateTaskPageContainer>
  );
}

export { CreateTaskPageContainer };
