import React from "react";

interface BlogCardProps {
  href: string;
  image: string;
  date: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ href, image, date, title }) => {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 sm:gap-4 transition-transform hover:translate-x-1 duration-300"
    >
      {/* Blog Thumbnail */}
      <div className="h-15 w-16 sm:w-22.5 shrink-0 overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Blog Content */}
      <div className="w-full min-w-0">
        {/* Date */}
        <span className="block mb-1 text-sm text-black font-normal dark:text-white truncate">
          {date}
        </span>

        {/* Title */}
        <h5 className="text-sm sm:text-sm font-normal text-black dark:text-white line-clamp-2">
          {title}
        </h5>
      </div>
    </a>
  );
};

export default BlogCard;
