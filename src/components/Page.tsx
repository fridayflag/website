import type { HTMLAttributes, PropsWithChildren } from "react";
import styles from "@/styles/components/page.module.scss";
import clsx from "clsx";

export function Page(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...rest } = props;
  return (
    <div className={clsx(styles.root, className)} {...rest}>{children}</div>
  )
}
