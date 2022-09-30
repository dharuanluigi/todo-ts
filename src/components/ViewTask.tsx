import { CaretDown, CaretUp } from "phosphor-react";
import { useState } from "react";
import { ESortTasks } from "../App";
import { EmptyTaskView } from "./EmptyTaskView";
import { Task, TaskProps } from "./Task";

import styles from "./ViewTask.module.css";

interface ViewTaskProps {
  tasks: TaskProps[];
  onTaskCompleted: (taskId: number, isChecked: boolean) => void;
  onDeleteTask: (taskId: number) => void;
  onAddDescription: (task: TaskProps) => void;
  onSortTasks: (orientation: ESortTasks) => void;
}

export function ViewTask({
  tasks,
  onTaskCompleted,
  onDeleteTask,
  onAddDescription,
  onSortTasks,
}: ViewTaskProps) {
  const [isDoneTasksSortClick, setIsDoneTasksSortClick] = useState(false);
  const [isNotDoneTasksSortClick, setIsNotDoneTasksSortClick] = useState(true);

  function calcHowManyTasksIsDone() {
    let total = tasks.filter((task) => task.isDone);
    return total.length;
  }

  function handleClickSortDoneTasks() {
    onSortTasks(ESortTasks.IsDone);
    setIsDoneTasksSortClick((value) => !value);
    setIsNotDoneTasksSortClick((value) => !value);
  }

  function handleClickSortIsNotDoneTasks() {
    onSortTasks(ESortTasks.IsNotDone);
    setIsNotDoneTasksSortClick((value) => !value);
    setIsDoneTasksSortClick((value) => !value);
  }

  return (
    <div className={styles.taskViewContainer}>
      <div className={styles.taskHeader}>
        <div>
          <span
            className={styles.totalCreatedTaskTitle}
            onClick={handleClickSortIsNotDoneTasks}
          >
            {isNotDoneTasksSortClick ? (
              <CaretUp weight="bold" />
            ) : (
              <CaretDown weight="bold" />
            )}{" "}
            Tarefas criadas
          </span>
          <span className={styles.counterTasks}>{tasks.length}</span>
        </div>
        <div>
          <span
            className={styles.totalCompletedTaskTitle}
            onClick={handleClickSortDoneTasks}
          >
            {isDoneTasksSortClick ? (
              <CaretUp weight="bold" />
            ) : (
              <CaretDown weight="bold" />
            )}{" "}
            Concluídas
          </span>
          <span className={styles.counterTasks}>
            {calcHowManyTasksIsDone()} de {tasks.length}
          </span>
        </div>
      </div>

      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskCompleted={onTaskCompleted}
              onDeleteTask={onDeleteTask}
              onAddDescription={onAddDescription}
            />
          ))
        ) : (
          <EmptyTaskView />
        )}
      </div>
    </div>
  );
}
