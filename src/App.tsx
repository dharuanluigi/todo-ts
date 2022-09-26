import RocketSvg from "./assets/rocket.svg";

import styles from "./App.module.css";
import { CreateTask } from "./components/CreateTask";
import { ViewTask } from "./components/ViewTask";

export function App() {
  return (
    <div>
      <header className={styles.containerHeader}>
        <img src={RocketSvg} alt="Um icone de foguete decolando" />{" "}
        <span>todo</span>
      </header>

      <div className={styles.containerContent}>
        <CreateTask />
      </div>

      <div className={styles.containerTasks}>
        <ViewTask />
      </div>
    </div>
  );
}
