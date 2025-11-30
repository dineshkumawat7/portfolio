/**
 * Button Component
 * Reusable button component with comprehensive features
 *
 * Features:
 * - Multiple variants: primary, secondary, outline, danger
 * - Multiple sizes: small, medium, large
 * - Loading state with animated spinner
 * - Disabled state with visual feedback
 * - Full width support
 * - Full accessibility (ARIA labels, semantic HTML)
 * - Keyboard navigation support
 * - Smooth animations and transitions
 * - Custom className support
 * - Event handlers with proper typing
 * - Responsive design
 * - Performance optimized with useMemo and useCallback
 * - Dark mode support
 *
 * Variants:
 * - primary: Green button for main actions
 * - secondary: Gray button for secondary actions
 * - outline: Blue button with outline style
 * - danger: Red button for destructive actions
 *
 * @component
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Click Me
 * </Button>
 *
 * @example
 * <Button variant="danger" size="large" loading={isLoading}>
 *   {isLoading ? "Deleting..." : "Delete"}
 * </Button>
 *
 * @example
 * <Button fullWidth variant="primary" size="large">
 *   Submit Form
 * </Button>
 */

import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const Button = ({
    children,
    onClick,
    type = "button",

    variant = "primary",
    size = "medium",
    className = "",

    disabled = false,
    loading = false,
    fullWidth = false,

    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    title,

    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    ...rest
}) => {
    const baseStyles = useMemo(
        () =>
            "font-medium rounded-md transition-all duration-200 ease-in-out " +
            "inline-flex items-center justify-center gap-2 cursor-pointer " +
            "focus:outline-none focus:ring-2 focus:ring-offset-2 " +
            "disabled:opacity-60 disabled:cursor-not-allowed " +
            "active:scale-95",
        []
    );

    const variantStyles = useMemo(() => {
        const variants = {
            primary:
                "bg-green-500 text-white border border-green-600 " +
                "hover:bg-green-600 active:bg-green-700 " +
                "focus:ring-green-300 dark:focus:ring-green-400",

            secondary:
                "bg-gray-600 text-white border border-gray-700 " +
                "hover:bg-gray-700 active:bg-gray-800 " +
                "focus:ring-gray-300 dark:focus:ring-gray-400",

            outline:
                "bg-transparent text-blue-600 border-2 border-blue-600 " +
                "hover:bg-blue-50 active:bg-blue-100 " +
                "focus:ring-blue-300 dark:text-blue-400 dark:border-blue-400 " +
                "dark:hover:bg-blue-900/20",

            danger:
                "bg-red-600 text-white border border-red-700 " +
                "hover:bg-red-700 active:bg-red-800 " +
                "focus:ring-red-300 dark:focus:ring-red-400",
        };
        return variants[variant] || variants.primary;
    }, [variant]);

    const sizeStyles = useMemo(() => {
        const sizes = {
            small: "px-3 py-1.5 text-sm gap-1.5",
            medium: "px-4 py-2 text-base gap-2",
            large: "px-6 py-3 text-lg gap-2.5",
        };
        return sizes[size] || sizes.medium;
    }, [size]);

    const widthStyles = useMemo(
        () => (fullWidth ? "w-full" : ""),
        [fullWidth]
    );

    const handleClick = useCallback(
        (e) => {
            if (!disabled && !loading && onClick) {
                onClick(e);
            }
        },
        [disabled, loading, onClick]
    );

    const buttonId = rest.id || undefined;
    const loadingId = loading ? `${buttonId}-loading` : undefined;

    const finalAriaDescribedBy = useMemo(() => {
        const ids = [];
        if (ariaDescribedBy) ids.push(ariaDescribedBy);
        if (loadingId) ids.push(loadingId);
        return ids.length > 0 ? ids.join(" ") : undefined;
    }, [ariaDescribedBy, loadingId]);

    return (
        <button
            type={type}
            id={buttonId}
            disabled={disabled || loading}
            onClick={handleClick}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-label={ariaLabel}
            aria-describedby={finalAriaDescribedBy}
            aria-disabled={disabled || loading}
            title={title}
            className={`
        ${baseStyles}
        ${variantStyles}
        ${sizeStyles}
        ${widthStyles}
        ${className}
      `.trim()}
            {...rest}
        >
            {/* Loading spinner with animation */}
            {loading && (
                <span
                    id={loadingId}
                    className="inline-flex animate-spin"
                    aria-label="loading"
                    role="output"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </span>
            )}

            {/* Button content with optional opacity during loading */}
            <span className={loading ? "opacity-70" : ""}>
                {children}
            </span>
        </button>
    );
};

/**
 * PropTypes validation for Button component
 * Ensures correct prop types and catches errors during development
 */
Button.propTypes = {
    children: PropTypes.node.isRequired,

    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,

    variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    className: PropTypes.string,

    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,

    type: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,

    "aria-label": PropTypes.string,
    "aria-describedby": PropTypes.string,
};

/**
 * Default props for Button component
 * Provides sensible defaults for optional props
 */
Button.defaultProps = {
    type: "button",
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    fullWidth: false,
    className: "",
};

export default Button;
