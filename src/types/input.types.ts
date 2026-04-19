import type { ReactNode, InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name" | "value"> {
  id: string;
  name: string;
  value?: string;
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
}
