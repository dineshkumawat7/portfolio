import { useEffect, useState } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-1 rounded-full border border-gray-400 dark:border-gray-700 bg-white dark:bg-black dark:text-white 
          shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-all duration-300"
        >
          <HiArrowSmallUp className="size-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
