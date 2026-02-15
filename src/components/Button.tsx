import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "@/styles/components/button.module.scss";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...rest } = props;
  return (
    <button className={clsx(styles.root, className)} {...rest}>{children}</button>
  )
}
