import React from "react";

type ContactInfoCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
  description?: string;
  external?: boolean;
  className?: string;
};

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  value,
  link,
  description,
  external = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-start p-4 sm:p-6 rounded-2xl bg-gray-100 dark:bg-neutral-900 
          backdrop-blur-md border border-gray-300 dark:border-gray-300/30 font-semibold text-gray-700 dark:text-gray-200 ${className}`}
    >
      <div className="mb-3 sm:mb-4 p-3 bg-teal-100 rounded-full">
        <Icon
          className="text-2xl sm:text-3xl text-teal-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-lg sm:text-xl mb-1 text-center sm:text-left">
        {title}
      </h3>
      {link ? (
        <a
          href={link}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-base sm:text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 text-center sm:text-left break-all"
          aria-label={`${title}: ${value}`}
        >
          {value}
        </a>
      ) : (
        <p className="text-base sm:text-lg font-medium text-center sm:text-left">
          {value}
        </p>
      )}
      {description && (
        <p className="text-xs sm:text-sm mt-2 text-center sm:text-left">
          {description}
        </p>
      )}
    </div>
  );
};

export default ContactInfoCard;
