import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={clsx("mx-auto max-w-11/12 px-2 sm:px-6 lg:px-20 py-15", className)}
    >
      {children}
    </div>
  );
};

export default Container;
