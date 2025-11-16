import { useState, useEffect } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const InputField = ({
    name,
    type = "text",
    placeholder = "",
    value,
    onChange,
    error,
    icon: Icon,
    required = false,
    ...rest
}) => {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (value && !error) setIsValid(true);
        else setIsValid(false);
    }, [value, error]);

    return (
        <div className="flex flex-col space-y-1">
            <div className="relative">
                {Icon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                        <Icon />
                    </span>
                )}

                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`w-full py-2 border text-gray-700 focus:outline-none transition-all duration-200
                        ${Icon ? "pl-10 pr-3" : "px-4"}
                        ${error
                            ? "border-red-500 focus:border-red-500"
                            : isValid
                                ? "border-green-500 focus:border-green-500"
                                : "border-gray-400 focus:border-blue-500"
                        }`}
                    {...rest}
                />
            </div>

            {error && (
                <p className="text-sm flex items-center gap-1 text-red-500">
                    <RiErrorWarningFill className="text-base flex-shrink-0" />
                    <span>{error}</span>
                </p>
            )}
        </div>
    );
};

export default InputField;
