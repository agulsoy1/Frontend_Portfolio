import { useState } from "react";
import Image from "next/image";
import TechStack from "./TechStack";

export default function ContactModal({
  isClosing,
  closeModal,
}: {
  isClosing: boolean;
  closeModal: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetch("api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Message Sent");
  }

  return (
    <div className="fixed inset-0 z-150 w-full h-dvh flex flex-col lg:flex-row lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-300 lg:h-200 bg-opacity-50 md:rounded-[25px] overflow-y-auto">
      <div
        className={`flex justify-center items-center lg:h-full bg-white w-full lg:w-1/2 text-center text-black p-5 ${isClosing ? "fade-out-left" : "fade-in-left"} flex flex-col items-center`}
      >
        <button onClick={closeModal} className="visible lg:invisible absolute top-5 right-5 font-lightbold text-[40px]">
          <Image
            src="/assets/xmark-solid-full.png"
            alt="Close Icon"
            width={40}
            height={40}
          />
        </button>
        <div className="md:my-20 my-3">
          <h2 className="text-[24px] xl:text-[28px] font-medium mb-3">Who Am I?</h2>
          <p className="text-[15px] xl:text-xl mx-5 md:mx-10 md:text-lg">
            My name is Alexandre Turgut Gulsoy, and I&apos;m a software
            developer with a focus on building responsive, modern web
            applications. I enjoy turning ideas into clean, user-friendly
            experiences that prioritize functionality, performance, and
            usability.
          </p>
        </div>
        <div>
          <p className="mb-10 text-[20px] xl:text-[24px] font-medium">My Technology Stack</p>
          <ul className="flex items-center justify-center md:gap-5 flex-wrap mx-5 md:mx-20 sm:mx-0">
            <TechStack
              techName="React"
              techIcon="/assets/react_icon.png"
              techAlt="React Icon"
            />
            <TechStack
              techName="HTML"
              techIcon="/assets/html_icon.png"
              techAlt="HTML Icon"
            />
            <TechStack
              techName="CSS"
              techIcon="/assets/tailwindCSS_icon.png"
              techAlt="CSS Icon"
            />
            <TechStack
              techName="JavaScript"
              techIcon="/assets/javascript_icon.png"
              techAlt="JavaScript Icon"
            />
            <TechStack
              techName="NodeJS"
              techIcon="/assets/nodejs_icon.png"
              techAlt="Node.js Icon"
            />
            <TechStack
              techName="TypeScript"
              techIcon="/assets/typescript_icon.png"
              techAlt="TypeScript Icon"
            />
            <TechStack
              techName="Redux"
              techIcon="/assets/redux_icon.png"
              techAlt="Redux Icon"
            />
            <TechStack
              techName="NextJS"
              techIcon="/assets/nextjs_icon.png"
              techAlt="NextJS Icon"
            />
          </ul>
        </div>
      </div>
      <div
        className={`lg:h-full w-full lg:w-1/2 text-white bg-black p-5 flex flex-col items-center ${isClosing ? "fade-out-right" : "fade-in-right"}`}
      >
        <button onClick={closeModal} className="invisible lg:visible absolute top-5 right-5 invert font-lightbold text-[40px]">
          <Image
            src="/assets/xmark-solid-full.png"
            alt="Close Icon"
            width={40}
            height={40}
          />
        </button>
        <h1 className="text-[28px] pt-5 md:pt-20">Let&apos;s Connect</h1>
        <form
          className="flex flex-col gap-5 md:gap-9 w-3/4 max-w-2xl mt-3 md:mt-20"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="John Doe"
            required
            className="p-5 w-full h-5 bg-white text-black"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="(123) 456-7890"
            required
            className="p-5 w-full h-5 bg-white text-black"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="johndoe98@gmail.com"
            required
            className="p-5 w-full h-5 bg-white text-black"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            placeholder="Your message"
            required
            className="p-5 w-full h-40 bg-white text-black"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
