import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  const [isTaskDone, setIsTaskDone] = useState<boolean>(false);

  function handleTaskIsDone(isChecked: boolean) {
    setIsTaskDone(isChecked);
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.task}>
        <Checkbox.Root
          className={isTaskDone ? styles.checked : styles.unChecked}
          onCheckedChange={handleTaskIsDone}
        >
          <Checkbox.Indicator className={styles.centerizeCheck}>
            <Check weight="bold" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className={styles.taskContent}>
          <span
            className={isTaskDone ? styles.checked_text : styles.unChecked_text}
          >
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <Trash weight="bold" size={20} />
      </div>
    </div>
  );
}
