import { useState } from "react";
import { Check, Trash } from "phosphor-react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./Task.module.css";
import { TaskDetailModal } from "./TaskDetailModal";

export interface TaskProps {
  id: number;
  name: string;
  isDone: boolean;
  description?: string | null;
}

interface TaskComponentProps {
  task: TaskProps;
  onTaskCompleted: (taskId: number, isChecked: boolean) => void;
  onDeleteTask: (taskId: number) => void;
  onAddDescription: (task: TaskProps) => void;
  onUpdateTaskName: (task: TaskProps) => void;
}

export function Task({
  task,
  onTaskCompleted,
  onDeleteTask,
  onAddDescription,
  onUpdateTaskName,
}: TaskComponentProps) {
  const [isTaskDone, setIsTaskDone] = useState<boolean>(task.isDone);

  function handleTaskIsDone(isChecked: boolean) {
    setIsTaskDone(isChecked);
    onTaskCompleted(task.id, isChecked);
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
          <Dialog.Root>
            <Dialog.Trigger
              className={
                isTaskDone ? styles.checked_text : styles.unChecked_text
              }
            >
              {task.name}
            </Dialog.Trigger>
            <TaskDetailModal
              task={task}
              onAddDescription={onAddDescription}
              onUpdateTaskName={onUpdateTaskName}
            />
          </Dialog.Root>
        </div>
        <Trash
          weight="bold"
          size={20}
          className={styles.styleTrashIcon}
          onClick={() => onDeleteTask(task.id)}
        />
      </div>
    </div>
  );
}
