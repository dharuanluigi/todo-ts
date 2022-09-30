import * as Toast from "@radix-ui/react-toast";
import { ToastProps } from "@radix-ui/react-toast";
import { CheckCircle } from "phosphor-react";

import styles from "./ToastWarning.module.css";

interface ToastWarningProps extends ToastProps {}

export function ToastWarning({ ...rest }: ToastWarningProps) {
  return (
    <>
      <Toast.Root duration={1000} className={styles.toastContainer} {...rest}>
        <Toast.Title className={styles.toastTitle}>
          <CheckCircle weight="bold" size={22} color="green" />
          Salvo
        </Toast.Title>
        <Toast.Description>Descrição foi salva com sucesso!</Toast.Description>
      </Toast.Root>

      <Toast.Viewport />
    </>
  );
}
