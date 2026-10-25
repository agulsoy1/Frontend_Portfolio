import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContactModal } from "../context/ContactModalContext";

type NavProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nav({
  menuOpen,
  setMenuOpen,
  darkMode,
  setDarkMode,
}: NavProps) {
  const { openContactModal, setOpenContactModal, closeModal } =
    useContactModal();
  const navLinkHoverClass = `w-full hover:scale-120 hover:px-4 hover:py-2 hover:bg-white/20 rounded-[50px] duration-300`;
  const navButtonHoverClass = `w-full hover:scale-120 hover:bg-white/20 rounded-[50px] duration-300`;
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    {
      onClick: () => {
        if (openContactModal) {
          closeModal();
        } else {
          setOpenContactModal(true);
        }
      },
      label: "Contact",
    },
  ];

  return (
    <div className="w-full flex items-center justify-between">
      <div className="absolute left-5 top-5 flex items-center gap-1">
        <video
          src="/assets/alexgulsoy.dev.logo.2-1.mp4"
          width={100}
          height={100}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-25 h-25 object-contain brightness-200"
        />
        <div className="flex md:flex-row flex-col md:gap-1.5 text-white md:italic font-extralight text-[18px]">
          <div>Alexandre T.</div>
          <div>Gulsoy</div>
        </div>
      </div>
      <nav
        className={`absolute top-5 left-1/2 -translate-x-1/2 z-200 flex items-center justify-center py-3 px-5 bg-black/50 rounded-[40px] shadow-2xl`}
      >
        <div className="flex items-center gap-5">
          <ul
            className={`hidden md:flex gap-15 justify-center items-center text-lg font-extralight text-white`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.href === "/" ? (
                  <Link href={link.href} className={`${navLinkHoverClass}`}>
                    {link.label}
                  </Link>
                ) : link.href ? (
                  <a href={link.href} className={`${navLinkHoverClass}`}>
                    {link.label}
                  </a>
                ) : (
                  <button
                    onClick={link.onClick}
                    className={`${navButtonHoverClass}`}
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="md:order-2 order-1"
          >
            {darkMode ? (
              <Image
                src="/assets/sun-solid-full.svg"
                alt="Light Mode"
                width={25}
                height={25}
                className="invert"
              />
            ) : (
              <Image
                src="/assets/moon-solid-full.svg"
                alt="Dark Mode"
                width={25}
                height={25}
                className={`invert`}
              />
            )}
          </button>
          {
            <button
              className="md:hidden order-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image
                src="/assets/bars-solid-full.svg"
                alt="Menu"
                width={25}
                height={25}
                className="invert"
              />
            </button>
          }
        </div>
      </nav>
      {menuOpen && (
        <>
          <ul className="fixed inset-0 z-201 overflow-hidden flex flex-col justify-center items-center gap-30 text-3xl bg-black text-white md:hidden">
            <button
              className="absolute top-10 right-5 md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/assets/xmark-solid-full.png"
                alt="Menu"
                width={30}
                height={30}
                className="invert"
              />
            </button>
            {navLinks.map((link) => {
              return (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className={`${navLinkHoverClass}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={link.onClick}
                      className={`${navButtonHoverClass}`}
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
