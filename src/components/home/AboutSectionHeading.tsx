import { HTMLAttributes } from "react";
import { Monospace } from "../Monospace";
import styles from "@/styles/home/section-heading.module.scss";
import clsx from "clsx";

export function AboutSectionHeading(props: HTMLAttributes<HTMLHeadingElement>) {
  const { children, className, ...rest } = props;
  const classes = clsx(styles.root, className);
  return (
    <h2 {...rest} className={classes}>
      <Monospace>
        {children}
        &#58;
      </Monospace>
    </h2>
  )
}
