import PropTypes from "prop-types";

/**
 * Custom Button Component
 * @param {string} variant - Defines button style (primary, secondary, outline, danger)
 * @param {boolean} disabled - Disables the button
 * @param {function} onClick - Click event handler
 * @param {string} size - small | medium | large
 * @param {string} className - Additional custom styles
 * @param {ReactNode} children - Button label or icon
 */

const Button = ({
    variant = "primary",
    size = "medium",
    disabled = false,
    onClick,
    className = "",
    children,
    type = "button",
}) => {
    const base =
        "font-medium focus:outline-none transition-all duration-200 inline-flex justify-center items-center cursor-pointer";

    const variants = {
        primary: "bg-green-500 text-white border-1 border-green-700 hover:bg-green-700",
        secondary: "bg-gray-500 text-white border-1 border-gray-700 hover:bg-gray-700",
        outline: "bg-blue-500 text-white border-1 border-blue-700 hover:bg-blue-700",
        danger: "bg-red-500 text-white border-1 border-red-700 hover:bg-red-700",
    };

    const sizes = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-7 py-3 text-lg",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-pointer" : ""
                } ${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
