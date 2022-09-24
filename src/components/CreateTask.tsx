import { AddTaskButton } from "./AddTaskButton";
import { Input } from "./Input";

import styles from "./CreateTask.module.css";

export function CreateTask() {
  return (
    <div className={styles.createTask}>
      <Input />
      <AddTaskButton />
    </div>
  );
}
