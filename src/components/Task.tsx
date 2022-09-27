import * as Checkbox from "@radix-ui/react-checkbox";

import { Check, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.task}>
        <Checkbox.Root className={styles.checked}>
          <Checkbox.Indicator className={styles.centerizeCheck}>
            <Check weight="bold" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className={styles.taskContent}>
          <span className={styles.checked_text}>
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <Trash weight="bold" size={20} />
      </div>
    </div>
  );
}
