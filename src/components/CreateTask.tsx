import { ChangeEvent, useState } from "react";

import styles from "./CreateTask.module.css";

import { AddTaskButton } from "./AddTaskButton";
import { Input } from "./Input";
import { TaskProps } from "./Task";
import { TaskModel } from "../models/task.model";

interface CreateTaskProps {
  onCreateTask: (task: TaskProps) => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [taskName, setTaskName] = useState<string>("");

  function handleAddTaskName(event: ChangeEvent<HTMLInputElement>) {
    const inputedValue = event.target.value;

    const hasJustSpacesRegex = new RegExp(/^\s*$/gi);

    const normalizedInput = hasJustSpacesRegex.test(inputedValue)
      ? inputedValue.trim()
      : inputedValue;

    setTaskName(normalizedInput);
  }

  function handleAddNewTask() {
    const id = Math.floor(Math.random() * 10000);
    const name = taskName.trim();
    const newTask = new TaskModel(id, name);
    onCreateTask(newTask);
    setTaskName("");
  }

  const inputHasInvalidTaskName = taskName.length === 0;

  return (
    <div className={styles.createTask}>
      <Input onChange={handleAddTaskName} value={taskName} maxLength={25} />
      <AddTaskButton
        disabled={inputHasInvalidTaskName}
        onClick={handleAddNewTask}
      />
    </div>
  );
}
