import type { PropsWithChildren } from "react";
import styles from "@/styles/components/visually-hidden.module.scss";

export function VisuallyHidden(props: PropsWithChildren) {
  return (
    <span className={styles.root}>{props.children}</span>
  )
}
