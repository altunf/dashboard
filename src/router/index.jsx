import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/home-page";
import { MainLayout } from "../layouts/main-layout";

import { TasksPage, tasksPageLoader } from "../pages/tasks-page";
import {
  CreateTaskPage,
  createTaskPageSubmitAction,
} from "../pages/create-task-page";

import {
  TaskDetailPage,
  taskDetailPageLoader,
  updateTaskDetailAction,
} from "../pages/task-detail-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
        loader: tasksPageLoader,
      },
      {
        path: "/tasks/create",
        element: <CreateTaskPage />,
        action: createTaskPageSubmitAction,
      },
      {
        path: "/tasks/:id",
        element: <TaskDetailPage />,
        loader: taskDetailPageLoader,
        action: updateTaskDetailAction,
      },
    ],
  },
]);
