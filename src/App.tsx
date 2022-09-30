import { useState } from "react";

import RocketSvg from "./assets/rocket.svg";

import styles from "./App.module.css";

import { CreateTask } from "./components/CreateTask";
import { ViewTask } from "./components/ViewTask";
import { TaskProps } from "./components/Task";

import mockedTasks from "./mocks/task.moq.json";

export enum ESortTasks {
  IsDone,
  IsNotDone,
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(mockedTasks);

  function completeTask(taskId: number, isDone: boolean) {
    const allTasksWithTheCompletedOne = tasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = isDone;
      }
      return task;
    });
    setTasks(allTasksWithTheCompletedOne);
  }

  function deleteTask(taskId: number) {
    const allTasksWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskId
    );
    setTasks(allTasksWithoutDeletedOne);
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

  function sortTasks(orientation: ESortTasks) {
    const arraySorted = [...tasks];

    if (orientation == ESortTasks.IsDone) {
      arraySorted.sort((firstTask, secondTask) => {
        if (firstTask.isDone && secondTask.isDone) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      arraySorted.sort((firstTask, secondTask) => {
        if (!firstTask.isDone && !secondTask.isDone) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    console.log(arraySorted);

    setTasks(arraySorted);
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
          onTaskCompleted={completeTask}
          onDeleteTask={deleteTask}
          onAddDescription={addNewDescription}
          onSortTasks={sortTasks}
        />
      </div>
    </div>
  );
}
