import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

/**
 * Responsive, accessible, modern footer for portfolio sites.
 * Props:
 * - compact: boolean (renders single-row compact layout)
 * - className: string (optional additional Tailwind classes)
 */
const Footer = ({ compact = false, className = "" }) => {
    const currentYear = new Date().getFullYear();

    const containerClasses = compact
        ? "flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";

    return (
        <footer
            className={`w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300 ${className}`}
        >
            <div className={`max-w-7xl mx-auto px-6 py-10 ${containerClasses}`}>
                {/* 1️⃣ Logo & Bio */}
                <div className="flex flex-col items-start gap-2">
                    <a
                        href="#home"
                        className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Dinesh Kumawat
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Full-stack developer crafting clean, scalable web applications.
                    </p>
                </div>

                {/* 2️⃣ Quick Links */}
                <nav aria-label="Quick Links">
                    <ul className="space-y-2 sm:space-y-1">
                        {[
                            { name: "About", href: "#about" },
                            { name: "Projects", href: "#projects" },
                            { name: "Blog", href: "#blog" },
                            { name: "Resume", href: "#resume" },
                        ].map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3️⃣ Contact + Newsletter */}
                <div className="flex flex-col gap-4">
                    <form
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label
                            htmlFor="newsletter-email"
                            className="sr-only"
                        >
                            Email address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition duration-200 focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Subscribe
                        </button>
                    </form>

                    <div className="flex gap-4">
                        <a
                            href="mailto:hello@example.com"
                            className="text-sm hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                            hello@example.com
                        </a>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://linkedin.com/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                aria-label="Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            >
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="border-t border-gray-200 dark:border-gray-700 text-center py-4 text-xs text-gray-500 dark:text-gray-400">
                © {currentYear} Dinesh Kumawat. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
