import { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import "./ScrollToTopButton.css";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      className={` ScrollButton ${
        isVisible ? "Opacity100" : "Opacity0"
      }`}
    >
      <FiArrowUpCircle
        className={`ScrollButton_Icon`}
        strokeWidth={1.5}
      />
    </button>
  );
}
