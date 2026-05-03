import { useState } from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import Container from "../../components/layout/Container";
import { IoIosNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Skills", href: "/skills", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 bg-linear-to-r from-violet-50 to-blue-50 dark:from-slate-900 dark:to-neutral-950 border-b 
              border-gray-300 dark:border-slate-800"
    >
      <Container className="py-0!">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start sm:items-stretch">
            <div className="flex shrink-0 items-center">
              <a key={"home"} href="home">
                <span className="font-bold text-3xl text-teal-500">DINESH</span>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `rounded-sm px-3 py-2 text-sm font-medium ${
                        isActive
                          ? "bg-teal-500 text-white"
                          : "text-gray-950 hover:text-white dark:text-white hover:bg-teal-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-5">
            <button
              aria-label="Notification"
              title="View Notifications"
              type="button"
              className="relative rounded-full p-1 text-black dark:text-white cursor-pointer"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              {/* Bell Icon */}
              <IoIosNotificationsOutline className="text-2xl" />
            </button>
            <ThemeToggle />
            <div className="sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white hover:bg-white/5 
              focus:outline-2 focus:-outline-offset-1 focus:outline-teal-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed (Bars3) */}
                <svg
                  className={`size-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open (XMark) */}
                <svg
                  className={`size-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-sm px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-teal-500 text-white"
                      : "text-gray-950 hover:bg-teal-500 hover:text-white dark:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
