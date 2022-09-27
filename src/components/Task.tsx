import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface TaskProps {
  id: number;
  content: string;
  isDone: boolean;
}

interface TaskPropsModel {
  data: TaskProps;
  onTaskCompleted: (taskId: number, isChecked: boolean) => void;
  onDeleteTask: (taskId: number) => void;
}

export function Task({ data, onTaskCompleted, onDeleteTask }: TaskPropsModel) {
  const [isTaskDone, setIsTaskDone] = useState<boolean>(data.isDone);

  function handleTaskIsDone(isChecked: boolean) {
    setIsTaskDone(isChecked);
    onTaskCompleted(data.id, isChecked);
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.task}>
        <Checkbox.Root
          checked={isTaskDone}
          className={isTaskDone ? styles.checked : styles.unChecked}
          onCheckedChange={handleTaskIsDone}
        >
          <Checkbox.Indicator className={styles.styleCheckedIcon}>
            <Check weight="bold" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className={styles.taskContent}>
          <span
            className={isTaskDone ? styles.checked_text : styles.unChecked_text}
          >
            {data.content}
          </span>
        </div>
        <Trash
          weight="bold"
          size={20}
          className={styles.styleTrashIcon}
          onClick={() => onDeleteTask(data.id)}
        />
      </div>
    </div>
  );
}
