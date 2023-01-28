import React, { useEffect, useState } from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import * as S from "./styles";
import { Loading } from "../../components/loading";

function TaskDetailPageContainer() {
  const task = useLoaderData();
  const fetcher = useFetcher();
  const [isSubmitting, setSubmiting] = useState(false);

  const updateCompleted = () => {
    setSubmiting(true);
    fetcher.submit(null, { method: "put" });
  };

  useEffect(() => {
    setSubmiting(false);
  }, [task]);

  return (
    <S.TaskDetailPageContainer>
      <S.EditButton to={`/tasks/${task.id}/edit`}>Edit </S.EditButton>
      <S.TaskDetail>
        <fetcher.Form method="put">
          <S.Status completed={task.completed}>
            <input
              hidden
              type="checkbox"
              name="task-completed"
              onChange={updateCompleted}
              defaultChecked={task.completed}
            />
            {task.completed ? "Completed" : "Not completed"}
            {isSubmitting && <Loading />}
          </S.Status>
        </fetcher.Form>
        <S.Name>{task.name}</S.Name>
        <S.Description>{task.description}</S.Description>
      </S.TaskDetail>
    </S.TaskDetailPageContainer>
  );
}

export { TaskDetailPageContainer };
