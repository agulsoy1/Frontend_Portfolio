import Image from "next/image";
import React from "react";
import { useContactModal } from "../context/ContactModalContext";
import Link from "next/link";

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
  return (
    <>
      <nav
        className={`fixed z-50 flex items-center justify-between w-full p-5`}
      >
        <div>
          <Image
            src="/assets/logo_edited.png"
            alt="Logo"
            width={50}
            height={50}
            className="brightness-200"
          />
        </div>
        <div className="flex items-center gap-5">
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
                className={`${darkMode ? "invert" : ""}`}
              />
            </button>
          }
          <ul
            className={`hidden md:flex gap-7 justify-center items-center text-lg`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  if (openContactModal) {
                    closeModal();
                  } else {
                    setOpenContactModal(true);
                  }
                }}
                className="relative"
              >
                Contact
              </button>
            </li>
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className="relative">
            {darkMode ? (
              <Image
                src="/assets/sun-solid-full.svg"
                alt="Light Mode"
                width={20}
                height={20}
                className="invert"
              />
            ) : (
              <Image
                src="/assets/moon-solid-full.svg"
                alt="Dark Mode"
                width={25}
                height={25}
              />
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <>
          <ul className="fixed inset-0 z-101 overflow-hidden flex flex-col justify-center items-center gap-30 text-3xl bg-black text-white md:hidden">
            <button
              className="absolute top-5 right-5 md:hidden"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/assets/xmark-solid-full.svg"
                alt="Menu"
                width={30}
                height={30}
                className="invert"
              />
            </button>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  if (openContactModal) {
                    closeModal();
                  } else {
                    setOpenContactModal(true);
                    setMenuOpen(false);
                  }
                }}
                className="relative"
              >
                Contact
              </button>
            </li>
          </ul>
        </>
      )}
    </>
  );
}
