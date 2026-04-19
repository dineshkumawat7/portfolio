import { forwardRef, useEffect, useState } from "react";
import type { InputProps } from "../../types/input.types";
import { RiErrorWarningFill } from "react-icons/ri";
import { clsx } from "clsx";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      value,
      label,
      error,
      required,
      helperText,
      leftIcon,
      rightIcon,
      containerClassName = "",
      className = "",
      ...props
    },
    ref
  ) => {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
      if (value && !error) setIsValid(true);
      else setIsValid(false);
    }, [value, error]);

    return (
      <div className={clsx("w-full flex flex-col gap-1", containerClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-black dark:text-white flex items-center gap-1"
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div
          className={clsx(
            "flex items-center rounded-lg border bg-transparent transition",
            error
              ? "border-red-500"
              : isValid
              ? "border-teal-500"
              : "border-gray-300 dark:border-white/10"
          )}
        >
          {leftIcon && (
            <span className="px-2 flex items-center text-gray-400">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            name={name}
            value={value}
            required={required}
            aria-required={required}
            aria-invalid={!!error}
            className={`flex-1 text-black dark:text-white outline-none text-sm placeholder-gray-400
                        ${
                          leftIcon
                            ? "pr-3 py-2"
                            : rightIcon
                            ? "pl-3 py-2"
                            : "px-3 py-2"
                        }
                        ${className}`}
            {...props}
          />

          {rightIcon && (
            <span className="px-2 flex items-center text-gray-400">
              {rightIcon}
            </span>
          )}
        </div>
        {error ? (
          <p className="text-xs flex items-center gap-1 text-red-500">
            <RiErrorWarningFill className="size-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        ) : (
          helperText && <p className="text-xs text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
