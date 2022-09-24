import RocketSvg from "./assets/rocket.svg";

import styles from "./App.module.css";
import { Input } from "./components/Input";
import { AddTaskButton } from "./components/AddTaskButton";

export function App() {
  return (
    <div>
      <header className={styles.containerHeader}>
        <img src={RocketSvg} alt="Um icone de foguete decolando" />{" "}
        <span>todo</span>
      </header>

      <Input />

      <AddTaskButton />
    </div>
  );
}
