import * as Dialog from "@radix-ui/react-dialog";
import { TaskProps } from "./Task";

import styles from "./TaskDetailModal.module.css";

interface TaskDetailModalProps {
  data: TaskProps;
}

export function TaskDetailModal({ data }: TaskDetailModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlayModal} />

      <Dialog.Content className={styles.modalContent}>
        <Dialog.Title>{data.content}</Dialog.Title>

        <form className={styles.taskForm}>
          <textarea
            className={styles.taskDescription}
            placeholder="Adicione uma descrição da sua tarefa."
          >
            {data.description}
          </textarea>

          <button type="submit">Salvar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
