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
      className={`flex flex-col items-center sm:items-start p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md ${className}`}
    >
      {/* Icon */}
      <div className="mb-3 sm:mb-4 p-3 bg-blue-100 rounded-full">
        <Icon
          className="text-2xl sm:text-3xl text-blue-600"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 text-center sm:text-left">
        {title}
      </h3>

      {/* Value */}
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
        <p className="text-base sm:text-lg font-medium text-gray-800 text-center sm:text-left">
          {value}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center sm:text-left">
          {description}
        </p>
      )}
    </div>
  );
};

export default ContactInfoCard;
