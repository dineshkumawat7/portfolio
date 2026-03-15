import React from "react";
import clsx from "clsx";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={clsx(
        "relative inline-block text-sm font-normal text-black dark:text-white",
        "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full",
        "after:origin-left after:scale-x-0 after:bg-teal-500 after:transition-transform after:duration-300",
        "hover:after:scale-x-100",
        className
      )}
    >
      {children}
    </a>
  );
};
