import { useState } from "react";

import RocketSvg from "./assets/rocket.svg";

import styles from "./App.module.css";

import { CreateTask } from "./components/CreateTask";
import { ViewTask } from "./components/ViewTask";
import { TaskProps } from "./components/Task";

import mockedTasks from "./mocks/task.moq.json";

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(mockedTasks);

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

  function addNewTask(task: TaskProps) {
    const tasksWithNewTask = [...tasks, task];
    setTasks(tasksWithNewTask);
  }

  function addNewDescription(task: TaskProps) {
    const tasksWithTaskUpdated = tasks.map((itemTask) => {
      if (itemTask.id === task.id) {
        return task;
      } else {
        return itemTask;
      }
    });

    setTasks(tasksWithTaskUpdated);
  }

  return (
    <div>
      <header className={styles.containerHeader}>
        <img src={RocketSvg} alt="Um icone de foguete decolando" />{" "}
        <span>todo</span>
      </header>

      <div className={styles.containerContent}>
        <CreateTask onCreateTask={addNewTask} />
      </div>

      <div className={styles.containerTasks}>
        <ViewTask
          tasks={tasks}
          onTaskCompleted={completeTasks}
          onDeleteTask={deleteTasks}
          onAddDescription={addNewDescription}
        />
      </div>
    </div>
  );
}
