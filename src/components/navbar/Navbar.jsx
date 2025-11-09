import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    const handleLinkClick = (name) => {
        setActiveLink(name);
        setIsOpen(false);
    };

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="container w-10/12 mx-auto flex justify-between items-center px-6 h-16">
                {/* Logo */}
                <div className="flex items-center gap-10">
                    <div className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        DINESH
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-2 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => handleLinkClick(link.name)}
                                    className={`px-3 py-1.5 rounded-sm transition-all duration-200 ${activeLink === link.name
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-gray-100 hover:text-blue-600 text-gray-700"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Search + Login + Menu */}
                <div className="flex items-center gap-6">
                    {/* Search Bar */}
                    <div className="hidden md:flex items-center border border-gray-400 rounded-sm px-2 py-2 bg-gray-50 focus-within:border-blue-600 transition-all duration-300">
                        <FiSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-64 transition-all duration-300"
                        />
                    </div>

                    {/* Login Button */}
                    <button className="hidden md:flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-sm transition-colors duration-200 cursor-pointer">
                        <FaUserAlt className="text-sm" />
                        <span>Login</span>
                    </button>

                    {/* Hamburger Menu (Mobile) */}
                    <button
                        className="md:hidden text-2xl text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out ${isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                {/* Mobile Search */}
                <div className="flex items-center border border-gray-400 rounded-md mx-4 mt-3 px-3 py-2 bg-gray-50">
                    <FiSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
                    />
                </div>

                {/* Mobile Links */}
                <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => handleLinkClick(link.name)}
                                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${activeLink === link.name
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100 hover:text-blue-600"
                                    }`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                    {/* Mobile Login */}
                    <button className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-sm transition-colors duration-200 cursor-pointer">
                        <FaUserAlt className="text-sm" />
                        <span>Login</span>
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
