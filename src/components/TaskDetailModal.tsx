import { ChangeEvent, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import * as Toast from "@radix-ui/react-toast";

import styles from "./TaskDetailModal.module.css";

import { TaskProps } from "./Task";
import { ToastWarning } from "./ToastWarning";

interface TaskDetailModalProps {
  data: TaskProps;
  onAddDescription: (task: TaskProps) => void;
}

export function TaskDetailModal({
  data,
  onAddDescription,
}: TaskDetailModalProps) {
  const [description, setDescription] = useState(data.description);
  const [isOpen, setIsOpen] = useState(false);

  function handleTypeScription(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function handleAddTaskDescription() {
    const taskWithNewDescription = {
      ...data,
      description,
    };

    onAddDescription(taskWithNewDescription);
    setIsOpen(true);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlayModal} />

      <Dialog.Content className={styles.modalContent}>
        <Dialog.Title>{data.content}</Dialog.Title>

        <form onSubmit={handleAddTaskDescription} className={styles.taskForm}>
          <textarea
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
