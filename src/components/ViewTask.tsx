import { EmptyTaskView } from "./EmptyTaskView";
import { Task, TaskProps } from "./Task";
import styles from "./ViewTask.module.css";

interface ViewTaskProps {
  tasks: TaskProps[];
}

export function ViewTask({ tasks }: ViewTaskProps) {
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
        {tasks ? (
          tasks.map((task) => <Task key={task.id} data={task} />)
        ) : (
          <EmptyTaskView />
        )}
      </div>
    </div>
  );
}
