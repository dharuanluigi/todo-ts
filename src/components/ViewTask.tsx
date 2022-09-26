import { EmptyTaskView } from "./EmptyTaskView";
import styles from "./ViewTask.module.css";

export function ViewTask() {
  return (
    <div className={styles.taskViewContainer}>
      <div className={styles.taskHeader}>
        <div>
          <span className={styles.totalCreatedTaskTitle}>Tarefas criadas</span>
          <span className={styles.counterTasks}>{0}</span>
        </div>
        <div>
          <span className={styles.totalCompletedTaskTitle}>Concluídas</span>
          <span className={styles.counterTasks}>{0}</span>
        </div>
      </div>

      <div>
        <EmptyTaskView />
      </div>
    </div>
  );
}
