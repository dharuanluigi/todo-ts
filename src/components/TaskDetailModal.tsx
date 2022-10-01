import { ChangeEvent, FormEvent, ReactEventHandler, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import * as Toast from "@radix-ui/react-toast";

import styles from "./TaskDetailModal.module.css";

import { TaskProps } from "./Task";
import { ToastWarning } from "./ToastWarning";
import { PencilSimpleLine } from "phosphor-react";

interface TaskDetailModalProps {
  task: TaskProps;
  onAddDescription: (task: TaskProps) => void;
  onUpdateTaskName: (task: TaskProps) => void;
}

export function TaskDetailModal({
  task,
  onAddDescription,
  onUpdateTaskName,
}: TaskDetailModalProps) {
  const [description, setDescription] = useState(task.description);
  const [isOpen, setIsOpen] = useState(false);
  const [isEnableInputUpdateTaskName, setIsEnableInputUpdateTaskName] =
    useState(false);
  const [taskName, setTaskName] = useState(task.name);

  function handleTypeScription(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function handleAddTaskDescription(event: FormEvent) {
    event.preventDefault();

    const taskWithNewDescription = {
      ...task,
      description,
    };

    onAddDescription(taskWithNewDescription);
    setIsOpen(true);
  }

  function handleEnableInputUpdateTaskName() {
    setIsEnableInputUpdateTaskName((value) => !value);
  }

  function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleUpdateTaskName() {
    handleEnableInputUpdateTaskName();
    const newTaskWithNameUpdated = {
      ...task,
      name: taskName,
    };
    onUpdateTaskName(newTaskWithNameUpdated);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlayModal} />

      <Dialog.Content className={styles.modalContent}>
        <Dialog.Title className={styles.modalTitle}>
          <input
            autoFocus={false}
            type="text"
            onChange={handleTaskName}
            value={taskName}
            maxLength={25}
            disabled={isEnableInputUpdateTaskName}
            ref={(input) => input?.focus()}
            onBlur={handleUpdateTaskName}
          />
          <span onClick={handleEnableInputUpdateTaskName}>
            <PencilSimpleLine size={24} weight="bold" />
          </span>
        </Dialog.Title>

        <form onSubmit={handleAddTaskDescription} className={styles.taskForm}>
          <textarea
            autoFocus
            ref={(textArea: HTMLTextAreaElement | null) => {
              if (textArea) {
                const textEnd = textArea.value.length;
                textArea.setSelectionRange(textEnd, textEnd);
              }
            }}
            className={styles.taskDescription}
            onChange={handleTypeScription}
            placeholder="Adicione uma descrição da sua tarefa."
            value={description ? description : ""}
          />

          <Toast.Provider swipeDirection="right">
            <button type="submit">Salvar</button>
            <ToastWarning open={isOpen} onOpenChange={setIsOpen} />
          </Toast.Provider>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
