import { ChangeEvent, useState } from "react";
import { AddTaskButton } from "./AddTaskButton";
import { Input } from "./Input";

import styles from "./CreateTask.module.css";
import { TaskProps } from "./Task";
import { TaskModel } from "../models/task.model";

interface CreateTaskProps {
  onCreateTask: (task: TaskProps) => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [taskContent, setTaskContent] = useState<string>("");

  function handleTaskContent(event: ChangeEvent<HTMLInputElement>) {
    const inputedValue = event.target.value;

    const hasJustSpacesRegex = new RegExp(/^\s*$/gi);

    const normalizedInput = hasJustSpacesRegex.test(inputedValue)
      ? inputedValue.trim()
      : inputedValue;

    setTaskContent(normalizedInput);
  }

  function handleAddNewTask() {
    const id = Math.floor(Math.random() * 10000);
    const content = taskContent ?? "Descrição da tarefa não foi informada";
    const newTask = new TaskModel(id, content.trim());
    onCreateTask(newTask);
    setTaskContent("");
  }

  const inputHasInvalidTaskName = taskContent.length === 0;

  return (
    <div className={styles.createTask}>
      <Input onChange={handleTaskContent} value={taskContent} />
      <AddTaskButton
        disabled={inputHasInvalidTaskName}
        onClick={handleAddNewTask}
      />
    </div>
  );
}
