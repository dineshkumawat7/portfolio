import type { HTMLAttributes } from "react";

export interface CountUpProps extends HTMLAttributes<HTMLSpanElement> {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  separator?: string;
  startWhen?: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
  onStart?: () => void;
  onEnd?: () => void;
}
