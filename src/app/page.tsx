"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./components/contactModal";
import ProjectTiles from "./components/projectTiles";
import Background_Anim from "./components/Background_Anim";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function closeModal() {
    setIsClosing(true);

    setTimeout(() => {
      setOpenContactModal(false);
      setIsClosing(false);
    }, 500);
  }

  return (
    <div className={`flex flex-col items-center min-h-screen w-full `}>
      {openContactModal && (
        <ContactModal isClosing={isClosing} closeModal={closeModal} />
      )}
      <div
        className={`w-full ${darkMode ? "text-white bg-linear-to-bl from-slate-950 via-slate-900 to-slate-800" : "text-black bg-linear-to-tr from-[#826955] to-[#f1e4d2]"}`}
      >
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
                  src="/assets/icons/bars-solid-full.svg"
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
            <ul className="absolute z-101 overflow-hidden flex flex-col justify-center items-center gap-30 text-3xl w-full h-full bg-black text-white md:hidden">
              <button
                className="absolute top-5 right-5 md:hidden"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/assets/icons/xmark-solid-full.svg"
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
        <section
          className={`relative w-full flex-1 flex xl:flex-row flex-col items-center justify-center min-h-screen gap-5 overflow-hidden`}
        >
          <div
            className={`order-2 flex flex-col items-center xl:items-start justify-evenly gap-4 p-5 rounded-lg`}
          >
            <div className="flex flex-col text-center xl:text-left sm:p-0 p-10 gap-4 z-100">
              <h1 className="lg:text-[50px] text-[35px] font-bold fade-in delay-250 transition-opacity">
                Hi, my name is Alex
              </h1>
              <p className="lg:text-[22px] max-w-160 text-[16px] fade-in delay-500 transition-opacity">
                I am a software developer driven by curiosity and a passion for
                creative problem-solving. I build responsive, intuitive web
                applications that create meaningful, user-centered experiences.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 z-50 relative">
              <Link
                href="https://www.linkedin.com/in/alexandre-turgut-gulsoy-1063b62c"
                className="hover:scale-200 bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce transition-transform delay-750"
                target="_blank"
              >
                <Image
                  src="/assets/linkedin-in-brands-solid-full (1).svg"
                  alt="Contact"
                  width={20}
                  height={20}
                  className="invert"
                />
              </Link>
              <Link
                href="https://github.com/agulsoy1"
                className="hover:scale-200 bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce transition-transform delay-1000"
                target="_blank"
              >
                <Image
                  src="/assets/github-brands-solid-full.svg"
                  alt="Contact"
                  width={20}
                  height={20}
                  className="invert"
                />
              </Link>
              <a
                href="/Alex_FES_Resume.pdf"
                download
                className="hover:scale-200 bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce transition-transform delay-1250"
              >
                <Image
                  src="/assets/file-pdf-regular-full.svg"
                  alt="Contact"
                  width={20}
                  height={20}
                  className="invert"
                />
              </a>
            </div>
          </div>
          <div className="order-1">
            <figure
              className={`relative z-100 fade-in delay-0 min-w-60 min-h-75 
                w-[clamp(100px,25vw,400px)] 
                h-[clamp(150px,30vw,460px)] 
                rounded-[50%] border-4 
                ${darkMode ? "border-white" : "border-black"} overflow-hidden`}
            >
              <Image
                src="/assets/profile_img_wbg.jpg"
                alt="Profile Picture"
                width={100}
                height={100}
                className="absolute inset-0 w-full h-full"
              />
            </figure>
          </div>
          <Background_Anim />
        </section>
      </div>
      <section
        id="projects"
        className={`min-h-screen ${darkMode ? "text-white bg-linear-to-tl from-slate-950 via-slate-900 to-slate-800" : "bg-linear-to-br from-[#826955] to-[#f1e4d2] text-black"} w-full`}
      >
        <div
          className={`flex flex-col items-center text-center gap-4 p-5 rounded-lg fade-in`}
        >
          <h1 className={`text-4xl font-bold `}>Projects</h1>
          <p className="text-lg">
            Here are some of the projects I have created. <br />
            Click on the links to learn more about each project.
          </p>
          <div className="w-full flex flex-col items-center gap-40 py-20 px-10">
            <ProjectTiles
              projectImage="/assets/strinsic_photo.png"
              projectTitle="Skinstric AI"
              projectDesc="Developed an AI-powered skincare platform using Next.js and the OpenAI Vision API to provide real-time skin analysis and personalized recommendations in a responsive, modern interface."
              liveLink="https://skinstric-ai-internship-xi.vercel.app/"
              codeLink="https://github.com/agulsoy1/Skinstric_AI_Internship.git"
              iconsUsed={[
                "/assets/nextjs_icon.png",
                "/assets/typescript_icon.png",
                "/assets/tailwindCSS_icon.png",
                "/assets/white_openai_icon.png",
                "/assets/vercel_icon.png",
              ]}
              toolsUsed={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "OpenAI Vision API",
                "Vercel",
              ]}
            />
            <ProjectTiles
              projectImage="/assets/ultraverse_img.png"
              projectTitle="Ultraverse"
              projectDesc="Built a full-stack NFT marketplace with React and Firebase, leveraging dynamic routing and REST APIs to generate user profiles and individual NFT pages within a responsive, high-performance interface."
              liveLink="https://alex-internship-uih7.vercel.app/"
              codeLink="https://github.com/agulsoy1/alex-internship.git"
              iconsUsed={[
                "/assets/nextjs_icon.png",
                "/assets/typescript_icon.png",
                "/assets/tailwindCSS_icon.png",
                "/assets/white_openai_icon.png",
                "/assets/vercel_icon.png",
              ]}
              toolsUsed={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "REST APIs",
                "Vercel",
              ]}
            />
            <ProjectTiles
              projectImage="/assets/movie_db_img.png"
              projectTitle="Interactive Movie Database"
              projectDesc="Built an interactive movie database with React and the OMDb API, featuring real-time search, detailed movie pages, and a responsive, intuitive interface for discovering movies."
              liveLink="https://interactive-movie-database.vercel.app/login"
              codeLink="https://github.com/agulsoy1/Interactive__Movie__Database.git"
              iconsUsed={[
                "/assets/react_icon.png",
                "/assets/omdbAPI_icon.png",
                "/assets/axios_icon.png",
                "/assets/vercel_icon.png",
              ]}
              toolsUsed={["React", "OMDB API", "Axios", "Vercel"]}
            />
            <ProjectTiles
              projectImage="/assets/spotify_clone_img.png"
              projectTitle="Spotify Clone"
              projectDesc="Built a full-stack Spotify clone with Next.js, Supabase, and Stripe, implementing secure authentication, music uploads, audio playback, playlists, and premium subscription functionality."
              liveLink="https://music-streaming-website-omega.vercel.app/"
              codeLink="https://github.com/agulsoy1/music-streaming-website.git"
              iconsUsed={[
                "/assets/nextjs_icon.png",
                "/assets/typescript_icon.png",
                "/assets/supabase_icon.png",
                "/assets/stripe_icon.png",
                "/assets/vercel_icon.png",
              ]}
              toolsUsed={[
                "Next.js",
                "TypeScript",
                "Supabase",
                "Stripe",
                "Vercel",
              ]}
            />
            <ProjectTiles
              projectImage="/assets/Summarist_img.png"
              projectTitle="Summarist"
              projectDesc="Built a full-stack audiobook platform with Next.js and Firebase, featuring secure user accounts, book discovery, detailed book pages, and an integrated audio player through a responsive interface."
              liveLink="https://summarist-app-ten.vercel.app/"
              codeLink="https://github.com/agulsoy1/Summarist-App.git"
              iconsUsed={[
                "/assets/nextjs_icon.png",
                "/assets/typescript_icon.png",
                "/assets/firebase_icon.png",
                "/assets/tailwindCSS_icon.png",
                "/assets/vercel_icon.png",
              ]}
              toolsUsed={[
                "Next.js",
                "TypeScript",
                "Firebase",
                "Tailwind CSS",
                "Vercel",
              ]}
            />
            <ProjectTiles
              projectImage="/assets/library_img.png"
              projectTitle="Library Management System"
              projectDesc="Built a full-stack library management application with React and Firebase, enabling users to browse, organize, and manage books through a responsive, user-friendly interface."
              liveLink="https://react-library-tutorial.vercel.app/"
              codeLink="https://github.com/agulsoy1/React__Library__Tutorial.git"
              iconsUsed={[
                "/assets/react_icon.png",
                "/assets/firebase_icon.png",
                "/assets/tailwindCSS_icon.png",
                "/assets/vercel_icon.png",
              ]}
              toolsUsed={["React", "Firebase", "Tailwind CSS", "Vercel"]}
            />
          </div>
        </div>
      </section>
      <footer
        className={`w-full p-5 text-center ${darkMode ? "bg-[#D1CCDC] text-black" : "bg-[#0a0a0a] text-white"}`}
      >
        <p>&copy; 2026 Alexandre Turgut Gulsoy. All rights reserved.</p>
      </footer>
    </div>
  );
}
