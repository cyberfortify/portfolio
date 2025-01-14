import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the desired icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
    >
      <FaArrowUp /> {/* Icon added here */}
    </div>
  );
};

export default ScrollToTop;
