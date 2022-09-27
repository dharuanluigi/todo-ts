import { BaseSyntheticEvent, SyntheticEvent, useState } from "react";
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

  function handleTaskContent(event: BaseSyntheticEvent) {
    setTaskContent(event.target.value);
  }

  function handleAddNewEvent() {
    const id = Math.floor(Math.random() * 10000);
    const content = taskContent ?? "Descrição da tarefa não foi informada";
    const newTask = new TaskModel(id, content);
    onCreateTask(newTask);
    setTaskContent("");
  }

  return (
    <div className={styles.createTask}>
      <Input onChange={handleTaskContent} value={taskContent} />
      <AddTaskButton onClick={handleAddNewEvent} />
    </div>
  );
}
