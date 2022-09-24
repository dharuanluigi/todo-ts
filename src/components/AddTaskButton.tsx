import { PlusCircle } from "phosphor-react";

import styles from "./AddTaskButton.module.css";

export function AddTaskButton() {
  return (
    <button className={styles.addTaskButton} type="button">
      Criar <PlusCircle weight="bold" />
    </button>
  );
}
