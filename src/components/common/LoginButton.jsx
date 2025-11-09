import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const LoginButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center gap-3">
            {/* Desktop Login Button */}
            <button
                className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded-full transition-colors duration-200"
                onClick={() => alert("Login button clicked!")}
            >
                Login
            </button>

            {/* Mobile Menu Icon */}
            <button
                className="md:hidden text-2xl text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Dropdown (Optional) */}
            {isOpen && (
                <div className="absolute top-14 right-4 bg-white shadow-lg rounded-xl p-4 w-40 flex flex-col items-start space-y-2">
                    <button
                        onClick={() => alert("Login clicked")}
                        className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginButton;
