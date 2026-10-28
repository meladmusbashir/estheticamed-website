import type { ElementType, ReactNode } from "react";

export function Rise({
  d = 0,
  as,
  className = "",
  children,
}: {
  d?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const Tag = (as ?? "div") as ElementType;
  const delay = d ? " em-d" + d : "";
  return <Tag className={"em-rise" + delay + (className ? " " + className : "")}>{children}</Tag>;
}
