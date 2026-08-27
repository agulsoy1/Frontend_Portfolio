import Image from "next/image";
import Link from "next/link";

type ProjectTilesType = {
  projectImage: string;
  projectTitle: string;
  projectDesc: string;
  liveLink: string;
  codeLink: string;
  iconsUsed: string[];
  toolsUsed: string[];
};

export default function ProjectTiles({
  projectImage,
  projectTitle,
  projectDesc,
  liveLink,
  codeLink,
  iconsUsed,
  toolsUsed,
}: ProjectTilesType) {
  return (
    <div className="group relative shadow-lg bg-white rounded-[20px] w-full md:max-w-250 md:max-h-150 overflow-hidden">
      <Image
        src={projectImage}
        alt="Project Image"
        width={200}
        height={150}
        className="flex justify-center items-center rounded-lg w-full h-full"
      />
      <div className="absolute inset-0 flex md:flex-col flex-row gap-4 items-center md:justify-evenly hover:fade-in-right hover:bg-black/90 hover:text-white transition duration-500 ease-in-out py-[clamp(10px,2vw,15px)]">
        <div className="flex flex-col gap-4 items-center">
          <h2
            className={`group-hover:visible invisible text-[clamp(20px,2vw,30px)]`}
          >
            {projectTitle}
          </h2>
          <h3 className="group-hover:visible invisible text-[clamp(10px,2vw,20px)] md:mx-30 mx-0">
            {projectDesc}
          </h3>
        </div>
        <div className="group-hover:visible invisible flex gap-5">
          {toolsUsed.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <Image src={iconsUsed[index]} alt={tool} width={40} height={40} />
              <p className="text-[15px]">{tool}</p>
            </div>
          ))}
        </div>
        <div className="group-hover:visible invisible flex md:flex-row flex-col gap-5">
          <Link
            href={liveLink}
            target="_blank"
            className="bg-blue-500 text-white px-2 py-2 rounded-[50px]"
          >
            Live Demo
          </Link>
          <Link
            href={codeLink}
            target="_blank"
            className="bg-blue-500 text-white px-2 py-2 rounded-[50px]"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
