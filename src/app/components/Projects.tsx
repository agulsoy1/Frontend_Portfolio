const projects = [
  {
    image: "/assets/strinsic_photo.png",
    mobileImage: "/assets/mobile_Skincare.png",
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
    mobileImage: "/assets/mobile_ultraverse.png",
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
    mobileImage: "/assets/mobile_movie_db.png",
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
    mobileImage: "/assets/mobile_spotify.png",
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
    mobileImage: "/assets/mobile_summarist.png",
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
    mobileImage: "/assets/mobile_library.png",
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
  {
    image: "/assets/moodify_img.png",
    mobileImage: "/assets/moodify.png",
    title: "Moodify",
    description:
      "Moodify is a music recommendation app that suggests songs based on your mood.",
    liveLink: null,
    codeLink: "https://github.com/agulsoy1/Moodify.git",
    icons: [
      "/assets/nodejs_icon.png",
      "/assets/javascript_icon.png",
      "/assets/spotify-api_icon.png",
      "/assets/axios_icon.png",
      "/assets/dotenv_icon.png",
    ],
    tools: [
      "Node.js",
      "Javascript",
      "Spotify Web API",
      "Axios",
      "dotenv",
    ],
  },
];

import React from "react";
import FadeInSections from "./FadeInSections";
import ProjectTiles from "./projectTiles";

export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="projects" className={`relative min-h-screen w-full`}>
      <div
        className={`flex flex-col items-center text-center gap-4 p-5 rounded-lg`}
      >
        <FadeInSections>
          <h1 className={`text-3xl font-bold `}>Projects</h1>
        </FadeInSections>
        <FadeInSections>
          <p className="text-lg">
            Here are some of the projects I have created. <br />
            Hover over the cards to learn more about each project.
          </p>
        </FadeInSections>
        <div className="w-full flex flex-col items-center gap-50 py-20 px-10">
          {projects.map((project) => (
            <FadeInSections key={project.title}>
              <ProjectTiles
                darkMode={darkMode}
                projectImage={project.image}
                projectMobileImage={project.mobileImage}
                projectTitle={project.title}
                projectDesc={project.description}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
                iconsUsed={project.icons}
                toolsUsed={project.tools}
              />
            </FadeInSections>
          ))}
        </div>
      </div>
    </section>
  );
}
