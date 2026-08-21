"use client";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import ContactModal from "./components/contactModal";
import ProjectTiles from "./components/projectTiles";
import Nav from "./components/Nav";
import { useContactModal } from "./context/ContactModalContext";
// import TechSection from "./components/TechSection";

const projects = [
  {
    image: "/assets/strinsic_photo.png",
    title: "Skinstric AI",
    description:
      "Developed an AI-powered skincare platform using Next.js and the OpenAI Vision API to provide real-time skin analysis and personalized recommendations in a responsive, modern interface.",
    liveLink: "https://skinstric-ai-internship-xi.vercel.app/",
    codeLink: "https://github.com/agulsoy1/Skinstric_AI_Internship.git",
    icons: [
      "/assets/nextjs_icon.png",
      "/assets/typescript_icon.png",
      "/assets/tailwindCSS_icon.png",
      "/assets/white_openai_icon.png",
      "/assets/vercel_icon.png",
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI Vision API",
      "Vercel",
    ],
  },
  {
    image: "/assets/ultraverse_img.png",
    title: "Ultraverse",
    description:
      "Built a full-stack NFT marketplace with React and Firebase, leveraging dynamic routing and REST APIs to generate user profiles and individual NFT pages within a responsive, high-performance interface.",
    liveLink: "https://alex-internship-uih7.vercel.app/",
    codeLink: "https://github.com/agulsoy1/alex-internship.git",
    icons: [
      "/assets/nextjs_icon.png",
      "/assets/typescript_icon.png",
      "/assets/tailwindCSS_icon.png",
      "/assets/white_openai_icon.png",
      "/assets/vercel_icon.png",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
  },
  {
    image: "/assets/movie_db_img.png",
    title: "Interactive Movie Database",
    description:
      "Built an interactive movie database with React and the OMDb API, featuring real-time search, detailed movie pages, and a responsive, intuitive interface for discovering movies.",
    liveLink: "https://interactive-movie-database.vercel.app/login",
    codeLink: "https://github.com/agulsoy1/Interactive__Movie__Database.git",
    icons: [
      "/assets/react_icon.png",
      "/assets/omdbAPI_icon.png",
      "/assets/axios_icon.png",
      "/assets/vercel_icon.png",
    ],
    tools: ["React", "OMDB API", "Axios", "Vercel"],
  },
  {
    image: "/assets/spotify_clone_img.png",
    title: "Spotify Clone",
    description:
      "Built a full-stack Spotify clone with Next.js, Supabase, and Stripe, implementing secure authentication, music uploads, audio playback, playlists, and premium subscription functionality.",
    liveLink: "https://music-streaming-website-omega.vercel.app/",
    codeLink: "https://github.com/agulsoy1/music-streaming-website.git",
    icons: [
      "/assets/nextjs_icon.png",
      "/assets/typescript_icon.png",
      "/assets/supabase_icon.png",
      "/assets/stripe_icon.png",
      "/assets/vercel_icon.png",
    ],
    tools: ["Next.js", "TypeScript", "Supabase", "Stripe", "Vercel"],
  },
  {
    image: "/assets/Summarist_img.png",
    title: "Summarist",
    description:
      "Built a full-stack audiobook platform with Next.js and Firebase, featuring secure user accounts, book discovery, detailed book pages, and an integrated audio player through a responsive interface.",
    liveLink: "https://summarist-app-seven.vercel.app/",
    codeLink: "https://github.com/agulsoy1/Summarist-App.git",
    icons: [
      "/assets/nextjs_icon.png",
      "/assets/typescript_icon.png",
      "/assets/firebase_icon.png",
      "/assets/tailwindCSS_icon.png",
      "/assets/vercel_icon.png",
    ],
    tools: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
  },
  {
    image: "/assets/library_img.png",
    title: "Library Management System",
    description:
      "Built a full-stack library management application with React and Firebase, enabling users to browse, organize, and manage books through a responsive, user-friendly interface.",
    liveLink: "https://react-library-tutorial.vercel.app/",
    codeLink: "https://github.com/agulsoy1/React__Library__Tutorial.git",
    icons: [
      "/assets/react_icon.png",
      "/assets/firebase_icon.png",
      "/assets/tailwindCSS_icon.png",
      "/assets/vercel_icon.png",
    ],
    tools: ["React", "Firebase", "Tailwind CSS", "Vercel"],
  },
];

export default function Home() {
  const { openContactModal, isClosing, closeModal } = useContactModal();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div
      className={`flex flex-col items-center min-h-screen w-full ${
        openContactModal ? "blur-sm" : ""
      }`}
    >
      {openContactModal && (
        <ContactModal isClosing={isClosing} closeModal={closeModal} />
      )}
      <div
        className={`w-full ${darkMode ? "text-white bg-linear-to-bl from-slate-950 via-slate-900 to-slate-800" : "text-black bg-linear-to-tr from-[#826955] to-[#f1e4d2]"}`}
      >
        <div className={`bg-black`}>
          <Nav
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        <Hero darkMode={darkMode} />
      </div>
      {/* <TechSection /> */}
      <section
        id="projects"
        className={`relative min-h-screen ${darkMode ? "text-white bg-linear-to-tl from-slate-950 via-slate-900 to-slate-800" : "bg-linear-to-br from-[#826955] to-[#f1e4d2] text-black"} w-full`}
      >
        <div
          className={`flex flex-col items-center text-center gap-4 p-5 rounded-lg fade-in`}
        >
          <h1 className={`text-4xl font-bold `}>Projects</h1>
          <p className="text-lg">
            Here are some of the projects I have created. <br />
            Click on the links to learn more about each project.
          </p>
          <div className="w-full flex flex-col items-center gap-70 py-20 px-10">
            {projects.map((projects) => (
              <ProjectTiles
                key={projects.title}
                projectImage={projects.image}
                projectTitle={projects.title}
                projectDesc={projects.description}
                liveLink={projects.liveLink}
                codeLink={projects.codeLink}
                iconsUsed={projects.icons}
                toolsUsed={projects.tools}
              />
            ))}
          </div>
        </div>
      </section>
      <footer
        className={`relative bottom-0 w-full p-5 text-center ${darkMode ? "text-white" : "text-black"}`}
      >
        <p>&copy; 2026 Alexandre Turgut Gulsoy. All rights reserved.</p>
      </footer>
    </div>
  );
}
