import React, { useEffect, useState } from "react";

export default function BackToTop({ darkMode }: { darkMode: boolean }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
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
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 z-50 rounded-full p-3 shadow-lg ${
            darkMode ? "bg-[#A28E7A] text-black" : "bg-[#1E293B] text-white"
          }`}
        >
          Back to Top
        </button>
      )}
    </>
  );
}
