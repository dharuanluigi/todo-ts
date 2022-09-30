import { EmptyTaskView } from "./EmptyTaskView";
import { Task, TaskProps } from "./Task";

import styles from "./ViewTask.module.css";

interface ViewTaskProps {
  tasks: TaskProps[];
  onTaskCompleted: (taskId: number, isChecked: boolean) => void;
  onDeleteTask: (taskId: number) => void;
  onAddDescription: (task: TaskProps) => void;
}

export function ViewTask({
  tasks,
  onTaskCompleted,
  onDeleteTask,
  onAddDescription,
}: ViewTaskProps) {
  function calcHowManyTasksIsDone() {
    let total = tasks.filter((task) => task.isDone);
    return total.length;
  }

  return (
    <div className={styles.taskViewContainer}>
      <div className={styles.taskHeader}>
        <div>
          <span className={styles.totalCreatedTaskTitle}>Tarefas criadas</span>
          <span className={styles.counterTasks}>{tasks.length}</span>
        </div>
        <div>
          <span className={styles.totalCompletedTaskTitle}>Concluídas</span>
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
              data={task}
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
