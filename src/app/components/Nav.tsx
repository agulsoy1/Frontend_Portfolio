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
  const navLinkClass = `relative text-white 
                after:content-[''] 
                after:absolute 
                after:right-0 
                after:bottom-0 
                after:w-0 
                after:border-b-2 
                after:border-current 
                after:transition-all 
                after:duration-300 
                after:ease-in-out 
                hover:after:w-full
                hover:after:left-0`;
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
    <>
      <nav
        className={`fixed top-2 left-2 right-2 z-200 flex items-center justify-between w-full py-4 px-5 bg-black rounded-[40px]`}
      >
        <video
          src="/assets/logo_anim_wobg.mp4"
          width={100}
          height={100}
          autoPlay
          loop
          muted
          playsInline
          controls
          className="brightness-200"
        />
        <div className="flex items-center gap-5">
          <ul
            className={`hidden md:flex gap-7 justify-center items-center text-lg text-white`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.href === "/" ? (
                  <Link href={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                ) : link.href ? (
                  <a href={link.href} className={navLinkClass}>
                    {link.label}
                  </a>
                ) : (
                  ""
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
                      className={navLinkClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button onClick={link.onClick} className={navLinkClass}>
                      {link.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
