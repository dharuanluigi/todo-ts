import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  const totalCurrentLength = String(props.value).length;
  const isMaxNameLengthHited = totalCurrentLength == props.maxLength;

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...props}
      />
      <span
        className={
          isMaxNameLengthHited
            ? styles.charCounterLimitExceeded
            : styles.charCounter
        }
      >
        {totalCurrentLength}/{props.maxLength}
      </span>
    </div>
  );
}
