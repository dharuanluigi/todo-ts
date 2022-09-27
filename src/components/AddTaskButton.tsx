import { ButtonHTMLAttributes } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./AddTaskButton.module.css";

export function AddTaskButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.addTaskButton} type="button" {...props}>
      Criar <PlusCircle weight="bold" />
    </button>
  );
}
