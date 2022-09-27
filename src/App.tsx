import { useState } from "react";

import RocketSvg from "./assets/rocket.svg";

import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { ViewTask } from "./components/ViewTask";

import { TaskProps } from "./components/Task";

import moquedTasks from "./mocks/task.moq.json";

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(moquedTasks);

  function completeTasks(taskId: number, isDone: boolean) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = isDone;
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTasks(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <header className={styles.containerHeader}>
        <img src={RocketSvg} alt="Um icone de foguete decolando" />{" "}
        <span>todo</span>
      </header>

      <div className={styles.containerContent}>
        <CreateTask />
      </div>

      <div className={styles.containerTasks}>
        <ViewTask
          tasks={tasks}
          onTaskCompleted={completeTasks}
          onDeleteTask={deleteTasks}
        />
      </div>
    </div>
  );
}
