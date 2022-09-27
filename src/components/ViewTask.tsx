import { EmptyTaskView } from "./EmptyTaskView";
import { Task, TaskProps } from "./Task";
import styles from "./ViewTask.module.css";

interface ViewTaskProps {
  tasks: TaskProps[];
}

export function ViewTask({ tasks }: ViewTaskProps) {
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
        {tasks ? (
          tasks.map((task) => <Task key={task.id} data={task} />)
        ) : (
          <EmptyTaskView />
        )}
      </div>
    </div>
  );
}
