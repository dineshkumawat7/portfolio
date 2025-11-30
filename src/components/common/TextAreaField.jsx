/**
 * TextAreaField Component
 * Production-ready reusable textarea component with comprehensive features
 *
 * Features:
 * - Multi-line text input with customizable rows
 * - Real-time validation with visual feedback
 * - Touched state tracking for better UX
 * - Error messages with icon indicators
 * - Success state with visual confirmation
 * - Label and helper text support
 * - Character count with max length
 * - Auto-resize capability based on content
 * - Full accessibility (ARIA labels, semantic HTML)
 * - Disabled and readonly states
 * - Performance optimized with useCallback and useMemo
 * - Responsive design with Tailwind CSS
 */

import { useState, useCallback, useMemo } from "react";
import { RiErrorWarningFill, RiCheckFill } from "react-icons/ri";
import PropTypes from "prop-types";

const TextAreaField = ({
    name,
    value = "",
    onChange,

    placeholder = "",
    rows = 5,
    maxLength,
    required = false,
    disabled = false,
    readonly = false,
    autoResize = false,

    label,
    error = "",
    helperText,
    showCharCount = false,

    className = "",
    containerClassName = "",

    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,

    onBlur,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [textareaRef, setTextareaRef] = useState(null);

    const isValid = useMemo(() => {
        return value && !error && isTouched;
    }, [value, error, isTouched]);

    const isError = useMemo(() => {
        return !!error && isTouched;
    }, [error, isTouched]);

    const errorId = `${name}-error`;
    const helperId = `${name}-helper`;
    const charCountId = `${name}-charcount`;
    const labelId = `${name}-label`;

    const finalAriaDescribedBy = useMemo(() => {
        const ids = [];
        if (ariaDescribedBy) ids.push(ariaDescribedBy);
        if (isError) ids.push(errorId);
        if (helperText) ids.push(helperId);
        if (showCharCount) ids.push(charCountId);
        return ids.length > 0 ? ids.join(" ") : undefined;
    }, [ariaDescribedBy, isError, helperText, showCharCount, errorId, helperId, charCountId]);

    const handleFocus = useCallback((e) => {
        setIsFocused(true);
        rest.onFocus?.(e);
    }, [rest]);

    const handleBlur = useCallback((e) => {
        setIsFocused(false);
        setIsTouched(true);
        onBlur?.(e);
    }, [onBlur]);

    const handleChange = useCallback((e) => {
        onChange?.(e);
        if (autoResize && textareaRef) {
            textareaRef.style.height = "auto";
            textareaRef.style.height = `${Math.min(textareaRef.scrollHeight, 400)}px`;
        }
    }, [onChange, autoResize, textareaRef]);

    const charCount = useMemo(() => {
        return showCharCount ? `${String(value).length}${maxLength ? ` / ${maxLength}` : ""}` : null;
    }, [value, maxLength, showCharCount]);

    const borderColorClass = useMemo(() => {
        if (disabled) return "border-gray-200";
        if (isError) return "border-red-500 focus:border-red-600";
        if (isValid) return "border-green-500 focus:border-green-600";
        if (isFocused) return "border-blue-500";
        return "border-gray-300 focus:border-blue-500";
    }, [disabled, isError, isValid, isFocused]);

    const bgColorClass = useMemo(() => {
        if (disabled) return "bg-gray-50 cursor-not-allowed";
        if (readonly) return "bg-gray-100";
        return "bg-white";
    }, [disabled, readonly]);

    const ringColorClass = useMemo(() => {
        if (isError) return "focus:ring-red-200";
        if (isValid) return "focus:ring-green-200";
        return "focus:ring-blue-200";
    }, [isError, isValid]);


    return (
        <div className={`flex flex-col space-y-2 w-full ${containerClassName}`}>
            {label && (
                <label htmlFor={name} id={labelId} className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    {label}
                    {required && <span className="text-red-500" aria-label="required">*</span>}
                </label>
            )}

            <div className="relative">
                {isValid && (
                    <span className="absolute right-3 top-3 text-green-500 text-lg pointer-events-none">
                        <RiCheckFill />
                    </span>
                )}
                {isError && (
                    <span className="absolute right-3 top-3 text-red-500 text-lg pointer-events-none">
                        <RiErrorWarningFill />
                    </span>
                )}
                <textarea
                    ref={setTextareaRef}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    required={required}
                    disabled={disabled}
                    readOnly={readonly}
                    rows={rows}
                    maxLength={maxLength}
                    aria-label={ariaLabel || label || name}
                    aria-required={required}
                    aria-invalid={ariaInvalid === undefined ? isError : ariaInvalid}
                    aria-describedby={finalAriaDescribedBy}
                    className={`w-full py-2 px-3 border rounded-md text-gray-700 leading-relaxed transition-all duration-200 ease-in-out resize-none focus:outline-none focus:ring-2 focus:ring-offset-0 placeholder:text-gray-400 ${borderColorClass} ${bgColorClass} ${ringColorClass} ${disabled ? "opacity-60" : "opacity-100"} ${readonly ? "opacity-75" : ""} ${isValid ? "pr-10" : ""} ${isError ? "pr-10" : ""} ${className}`}
                    {...rest}
                />
            </div>

            {isError && (
                <p id={errorId} className="text-sm flex items-center gap-1.5 text-red-600 animate-in fade-in duration-200" role="alert">
                    <RiErrorWarningFill className="text-base flex-shrink-0" />
                    <span>{error}</span>
                </p>
            )}

            {helperText && !isError && (
                <p id={helperId} className="text-sm text-gray-600 animate-in fade-in duration-200">
                    {helperText}
                </p>
            )}

            {charCount && (
                <p id={charCountId} className={`text-xs font-medium transition-colors duration-200 ${maxLength && String(value).length > maxLength * 0.9 ? "text-orange-600" : "text-gray-500"}`}>
                    {charCount}
                </p>
            )}
        </div>
    );
};

TextAreaField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autoResize: PropTypes.bool,
    label: PropTypes.string,
    error: PropTypes.string,
    helperText: PropTypes.string,
    showCharCount: PropTypes.bool,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    "aria-label": PropTypes.string,
    "aria-describedby": PropTypes.string,
    "aria-invalid": PropTypes.bool,
    onBlur: PropTypes.func,
};

TextAreaField.defaultProps = {
    placeholder: "",
    value: "",
    error: "",
    rows: 5,
    required: false,
    disabled: false,
    readonly: false,
    autoResize: false,
    showCharCount: false,
    className: "",
    containerClassName: "",
};

export default TextAreaField;
