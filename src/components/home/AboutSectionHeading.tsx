import { HTMLAttributes } from "react";
import { Monospace } from "../Monospace";

export function AboutSectionHeading(props: HTMLAttributes<HTMLHeadingElement>) {
  const { children, ...rest } = props;
  return (
    <h2 {...rest}>
      <Monospace>
        {children}
      </Monospace>
    </h2>
  )
}
