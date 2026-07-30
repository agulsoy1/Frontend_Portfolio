"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./components/contactModal";
import ProjectTiles from "./components/projectTiles";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex flex-col items-center min-h-screen w-full `}>
      {openContactModal && <ContactModal />}
      <div
        className={`w-full ${darkMode ? "text-white bg-linear-to-l from-slate-950 via-slate-900 to-slate-800" : "text-black bg-linear-to-r from-[#826955] to-[#f1e4d2]"}`}
      >
        <nav className="fixed z-50 flex items-center justify-between w-full p-5">
          <div>
            <Image
              src="/assets/logo_edited.png"
              alt="Logo"
              width={50}
              height={50}
              className="brightness-200"
            />
          </div>
          <ul className={`flex gap-7 justify-center items-center text-lg`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <button
                onClick={() => setOpenContactModal(!openContactModal)}
                className="relative"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative"
              >
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
            </li>
          </ul>
        </nav>
        <section
          className={`relative w-full flex-1 flex items-center justify-center min-h-screen gap-15 overflow-hidden`}
        >
          <div
            className={`w-225 flex flex-col items-start justify-evenly gap-4 text-left p-5 rounded-lg`}
          >
            <div className="flex flex-col gap-4 z-100">
              <h1 className="text-[50px] font-bold fade-in delay-0">
                Hi, my name is Alex
              </h1>
              <p className="text-[22px] w-160 fade-in delay-250">
                I am a software developer driven by curiosity and a passion for
                creative problem-solving. I build responsive, intuitive web
                applications that create meaningful, user-centered experiences.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/alexandre-turgut-gulsoy-1063b62c"
                className="bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce delay-750"
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
                className="bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce delay-1000"
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
                className="bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce delay-1250"
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
          <figure
            className={`relative fade-in delay-1500 w-100 h-115 rounded-[50%] border-4 ${darkMode ? "border-white" : "border-black"} overflow-hidden`}
          >
            <Image
              src="/profile_img_wbg.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="absolute inset-0 w-full h-full"
            />
          </figure>
          <div className={`absolute right-[22.45%] top-1/2 -translate-y-1/2 ${darkMode ? "border-white" : "border-black"} border-dotted border-5 rounded-[50%] w-110 h-125 opacity-60 button-bounce delay-1750`}></div>
          <div className={`absolute right-[21.7%] top-1/2 -translate-y-1/2 ${darkMode ? "border-white" : "border-black"} border-dotted border-5 rounded-[50%] w-120 h-135 opacity-60 button-bounce delay-2000`}></div>
        </section>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="linear-gradient(to right, #ecbd2c, #fdf8ea)"
          fillOpacity="1"
          d="M0,32L6.2,53.3C12.3,75,25,117,37,133.3C49.2,149,62,139,74,128C86.2,117,98,107,111,117.3C123.1,128,135,160,148,192C160,224,172,256,185,234.7C196.9,213,209,139,222,128C233.8,117,246,171,258,165.3C270.8,160,283,96,295,101.3C307.7,107,320,181,332,213.3C344.6,245,357,235,369,213.3C381.5,192,394,160,406,165.3C418.5,171,431,213,443,229.3C455.4,245,468,235,480,202.7C492.3,171,505,117,517,112C529.2,107,542,149,554,192C566.2,235,578,277,591,250.7C603.1,224,615,128,628,96C640,64,652,96,665,106.7C676.9,117,689,107,702,122.7C713.8,139,726,181,738,186.7C750.8,192,763,160,775,170.7C787.7,181,800,235,812,261.3C824.6,288,837,288,849,261.3C861.5,235,874,181,886,181.3C898.5,181,911,235,923,218.7C935.4,203,948,117,960,122.7C972.3,128,985,224,997,240C1009.2,256,1022,192,1034,138.7C1046.2,85,1058,43,1071,74.7C1083.1,107,1095,213,1108,245.3C1120,277,1132,235,1145,192C1156.9,149,1169,107,1182,96C1193.8,85,1206,107,1218,112C1230.8,117,1243,107,1255,117.3C1267.7,128,1280,160,1292,186.7C1304.6,213,1317,235,1329,224C1341.5,213,1354,171,1366,160C1378.5,149,1391,171,1403,197.3C1415.4,224,1428,256,1434,272L1440,288L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
        ></path>
      </svg>
      <section className="min-h-screen bg-gray-800 w-full">
        <div className="flex flex-col items-center text-center text-white gap-4 p-5 rounded-lg fade-in delay-500">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg">
            Here are some of the projects I have worked on. <br />
            Click on the links to learn more about each project.
          </p>
          <div className="w-full flex flex-col items-center gap-40 py-20 px-10">
            <div className="flex gap-50">
              <ProjectTiles
                projectImage="/assets/strinsic_photo.png"
                projectTitle="Skinstric AI"
                projectDesc="An AI-powered skin analysis tool."
              />
              <ProjectTiles
                projectImage="/assets/movie_db_img.png"
                projectTitle="Interactive Movie Database"
                projectDesc="A web application to explore and discover movies interactively."
              />
            </div>
            <div className="flex gap-50">
              <ProjectTiles
                projectImage="/assets/spotify_clone_img.png"
                projectTitle="Spotify Clone"
                projectDesc="A web application that replicates Spotify's core features."
              />
              <ProjectTiles
                projectImage="/assets/Summarist_img.png"
                projectTitle="Summarist"
                projectDesc="An AI-powered summarization tool."
              />
            </div>
            <div className="flex gap-50">
              <ProjectTiles
                projectImage="/assets/library_img.png"
                projectTitle="Library Management System"
                projectDesc="A web application to manage library resources efficiently."
              />
              <ProjectTiles
                projectImage="/assets/ultraverse_img.png"
                projectTitle="Ultraverse"
                projectDesc="An immersive virtual reality platform."
              />
            </div>
          </div>
        </div>
      </section>
      <footer
        className={`w-full p-5 text-center ${darkMode ? "bg-[#D1CCDC] text-black" : "bg-[#0a0a0a] text-white"}`}
      >
        <p>&copy; 2024 Alex. All rights reserved.</p>
      </footer>
    </div>
  );
}
