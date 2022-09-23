import RocketSvg from "./assets/rocket.svg";

import styles from "./App.module.css";

export function App() {
  return (
    <header className={styles.containerHeader}>
      <img src={RocketSvg} alt="Um icone de foguete decolando" />{" "}
      <span>todo</span>
    </header>
  );
}
