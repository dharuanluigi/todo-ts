import { CaretDown, CaretUp, XCircle } from "phosphor-react";
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
  onDeleteDoneTasks: () => void;
  onUpdateTaskName: (task: TaskProps) => void;
}

export function ViewTask({
  tasks,
  onTaskCompleted,
  onDeleteTask,
  onAddDescription,
  onSortTasks,
  onDeleteDoneTasks,
  onUpdateTaskName,
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
    <div>
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

      <div className={styles.tasksContainerContent}>
        <button
          onClick={onDeleteDoneTasks}
          title="Isso irá apagar todas as suas tarefas marcadas como concluídas"
        >
          <XCircle size={24} weight="bold" />
          Concluídas
        </button>
        <div>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onTaskCompleted={onTaskCompleted}
                onDeleteTask={onDeleteTask}
                onAddDescription={onAddDescription}
                onUpdateTaskName={onUpdateTaskName}
              />
            ))
          ) : (
            <EmptyTaskView />
          )}
        </div>
      </div>
    </div>
  );
}
