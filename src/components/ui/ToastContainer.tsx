import React from "react";
import { FiCheckCircle, FiXCircle, FiInfo, FiAlertTriangle } from "react-icons/fi";
import { useToast } from "../../context/ToastContext";

type ToastType = "success" | "error" | "info" | "warning";

export const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToast();
    const getTheme = (type: ToastType) => {
        switch (type) {
            case "success":
                return {
                    icon: <FiCheckCircle />,
                    bg: "bg-green-200",
                    border: "border-green-700",
                    text: "text-green-800",
                };

            case "error":
                return {
                    icon: <FiXCircle />,
                    bg: "bg-red-200",
                    border: "border-red-700",
                    text: "text-red-800",
                };

            case "info":
                return {
                    icon: <FiInfo />,
                    bg: "bg-blue-200",
                    border: "border-blue-700",
                    text: "text-blue-800",
                };

            case "warning":
                return {
                    icon: <FiAlertTriangle />,
                    bg: "bg-yellow-200",
                    border: "border-yellow-700",
                    text: "text-yellow-800",
                };

            default:
                return {
                    icon: <FiInfo />,
                    bg: "bg-gray-50",
                    border: "border-gray-500",
                    text: "text-gray-800",
                };
        }
    };

    return (
        <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
            {toasts.map((toast) => {
                const theme = getTheme(toast.type as ToastType);

                return (
                    <div
                        key={toast.id}
                        className={`flex items-center justify-between gap-3 min-w-65 max-w-85 px-4 py-3 rounded-lg shadow-md 
                            border ${theme.bg} ${theme.border}`}
                    >
                        {/* Left side */}
                        <div className={`flex items-center gap-2 ${theme.text}`}>
                            <span className="text-lg">{theme.icon}</span>

                            <span className="text-sm font-medium text-gray-900">
                                {toast.message}
                            </span>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="text-gray-500 hover:text-black text-lg leading-none cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                );
            })}
        </div>
    );
};