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
    { href: "/", label: "Home" },
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
    {
      onClick: () => setDarkMode(!darkMode),
      label: "Toggle Dark Mode",
    },
  ];

  return (
    <>
      <nav
        className={`fixed z-200 flex items-center justify-between w-full py-4 px-5 bg-black m-3 rounded-[40px]`}
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

        {/* <Image
          src="/assets/logo_edited.png"
          alt="Logo"
          width={50}
          height={50}
          className="brightness-200"
        /> */}
        <ul
          className={`hidden md:flex gap-7 justify-center items-center text-lg text-white`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.href ? (
                <Link href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              ) : (
                <button onClick={link.onClick}>
                  {link.label === "Toggle Dark Mode" ? (
                    darkMode ? (
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
                        className={`invert`}
                      />
                    )
                  ) : (
                    <span className={navLinkClass}>{link.label}</span>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
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
              if (link.label === "Toggle Dark Mode") return null;

              return (
                <li key={link.label}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={navLinkClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
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
