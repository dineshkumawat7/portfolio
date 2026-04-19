import type { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  error?: string;
  required?: boolean;
  helperText?: string;
  containerClassName?: string;
  className?: string;
}
