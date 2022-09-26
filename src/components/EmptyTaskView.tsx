import styles from "./EmptyTaskView.module.css";

import emptyIcon from "../assets/emptyListIcon.svg";

export function EmptyTaskView() {
  return (
    <div className={styles.emptyContainer}>
      <img src={emptyIcon} />
      <div className={styles.emptyContainerMessage}>
        <span>Você ainda não tem tarefas cadastradas</span>
      </div>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
