"use client";
import Image from "next/image";
import Link from "next/link";

type ProjectTilesType = {
  projectImage: string;
  projectMobileImage: string;
  projectTitle: string;
  projectDesc: string;
  liveLink: string;
  codeLink: string;
  iconsUsed: string[];
  toolsUsed: string[];
};

export default function ProjectTiles({
  darkMode,
  projectImage,
  projectMobileImage,
  projectTitle,
  projectDesc,
  liveLink,
  codeLink,
  iconsUsed,
  toolsUsed,
}: ProjectTilesType & { darkMode: boolean }) {
  return (
    <div className="group w-full max-w-250">
      <div className="relative shadow-[2px_2px_10px_rgba(0,0,0,0.5)] rounded-[20px] md:h-150 overflow-hidden">
        {/* Mobile Image */}
        <Image
          src={projectMobileImage}
          alt="Project Image"
          width={200}
          height={150}
          className="md:hidden w-full h-auto"
        />

        {/* Desktop Image */}
        <Image
          src={projectImage}
          alt="Project Image"
          width={400}
          height={300}
          className="md:block hidden w-full h-full object-cover"
        />

        <div className={`${darkMode ? "bg-[#1e293b]" : "bg-[#524235]"} md:absolute md:inset-0 flex flex-col md:gap-4 gap-10 items-center justify-evenly p-5 md:opacity-0 md:group-hover:opacity-100 text-white hover:appear-from-top md:bg-black/90 transition duration-500 ease-in-out py-[clamp(10px,2vw,15px)]`}>
          <div className="flex flex-col gap-4 items-center text-center">
            <h2 className={`font-bold text-[clamp(20px,2vw,30px)]`}>{projectTitle}</h2>
            <h3 className="font-light text-[clamp(15px,2vw,20px)] md:mx-30 mx-5">
              {projectDesc}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {toolsUsed.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <Image
                  src={iconsUsed[index]}
                  alt={tool}
                  width={40}
                  height={40}
                  className="w-[clamp(30px,4vw,40px)] h-[clamp(30px,4vw,40px)]"
                />
                <p className="text-[clamp(15px,2vw,20px)]">{tool}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-5">
            <Link
              href={liveLink}
              target="_blank"
              className="bg-blue-500 hover:scale-110 duration-200 transition-transform text-white px-2 py-2 rounded-[50px]"
            >
              Live Demo
            </Link>
            <Link
              href={codeLink}
              target="_blank"
              className="bg-blue-500 hover:scale-110 duration-200 transition-transform text-white px-2 py-2 rounded-[50px]"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
