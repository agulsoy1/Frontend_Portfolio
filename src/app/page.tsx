"use client";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import Nav from "./components/Nav";
import { useContactModal } from "./context/ContactModalContext";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Projects from "./components/Projects";

export default function Home() {
  const { openContactModal, isClosing, closeModal } = useContactModal();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`flex flex-col items-center min-h-screen w-full ${
        openContactModal ? "blur-sm" : ""
      }`}
    >
      <BackToTop darkMode={darkMode} />

      {openContactModal && (
        <ContactModal isClosing={isClosing} closeModal={closeModal} />
      )}

      <Nav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section
        id="home"
        className={`w-full ${darkMode ? "text-white bg-linear-to-bl from-slate-950 via-slate-900 to-slate-800" : "text-black bg-linear-to-tr from-[#826955] to-[#f1e4d2]"}`}
      >
        <Hero darkMode={darkMode} />
      </section>

      <section
        id="about"
        className={`w-full h-full scroll-mt-27 ${darkMode ? "text-white bg-linear-to-l from-[#0e162a] to-[#1c283c]" : "bg-linear-to-r from-[#826955] to-[#b8a592] text-black"}`}
      >
        <About darkMode={darkMode} />
      </section>

      <section
        id="projects"
        className={`w-full h-full scroll-mt-27 ${darkMode ? "text-white bg-linear-to-tl from-slate-950 via-slate-900 to-slate-800" : "bg-linear-to-br from-[#826955] to-[#f1e4d2] text-black"}`}
      >
        <Projects darkMode={darkMode} />
      </section>

      <footer
        className={`relative bottom-0 w-full p-5 text-center bg-black text-white`}
      >
        <p>&copy; 2026 Alexandre Turgut Gulsoy. All rights reserved.</p>
      </footer>
    </div>
  );
}
