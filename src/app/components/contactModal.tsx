import { useState } from "react";
import TechStack from "./TechStack";

export default function ContactModal({
  isClosing,
}: {
  isClosing: boolean;
  closeModal: () => void;
}) {
  const [formData, setFormData] = useState({
    email: "",
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
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-300 h-200 bg-opacity-50 z-150 rounded-[25px] overflow-hidden">
      <div
        className={`h-full bg-white w-1/2 text-black p-5 ${isClosing ? "fade-out-left" : "fade-in-left"} flex flex-col items-center justify-between`}
      >
        <h2 className="text-[25px] font-bold">Who Am I?</h2>
        <p className="text-xl flex flex-wrap">
          My name is Alex and I am a software developer who specializes in
          building web applications.
        </p>
        <div>
          <p className="mb-10 text-xl font-bold">My Technology Stack</p>
          <ul className="flex items-center justify-center gap-10 flex-wrap">
            <TechStack
              techName="React"
              techIcon="/assets/Icons/react_icon.png"
              techAlt="React Icon"
            />
            <TechStack
              techName="HTML"
              techIcon="/assets/Icons/html_icon.png"
              techAlt="HTML Icon"
            />
            <TechStack
              techName="CSS"
              techIcon="/assets/Icons/css_icon.png"
              techAlt="CSS Icon"
            />
            <TechStack
              techName="JavaScript"
              techIcon="/assets/Icons/javascript_icon.png"
              techAlt="JavaScript Icon"
            />
            <TechStack
              techName="NodeJS"
              techIcon="/assets/Icons/nodejs_icon.png"
              techAlt="Node.js Icon"
            />
            <TechStack
              techName="TypeScript"
              techIcon="/assets/Icons/typescript_icon.png"
              techAlt="TypeScript Icon"
            />
            <TechStack
              techName="Redux"
              techIcon="/assets/Icons/redux_icon.png"
              techAlt="Redux Icon"
            />
            <TechStack
              techName="NextJS"
              techIcon="/assets/Icons/nextjs_icon.png"
              techAlt="NextJS Icon"
            />
          </ul>
        </div>
      </div>
      <div
        className={`h-full w-1/2 text-white bg-black p-5 flex flex-col items-center justify-evenly ${isClosing ? "fade-out-right" : "fade-in-right"}`}
      >
        <h1 className="text-[25px]">Let&apos;s Connect</h1>
        <form className="flex flex-col gap-4 w-3/4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="johndoe98@gmail.com"
            className="p-5 w-full h-5 bg-white text-black"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="(123) 456-7890"
            className="p-5 w-full h-5 bg-white text-black"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <textarea
            placeholder="Your message"
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
