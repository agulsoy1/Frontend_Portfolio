import Image from "next/image";
import Link from "next/link";

type ProjectTilesType = {
  projectImage: string;
  projectTitle: string;
  projectDesc: string;
};

export default function ProjectTiles({projectImage, projectTitle, projectDesc}: ProjectTilesType) {
  return (
    <div className="group relative bg-white rounded-[20px] w-250 h-150 overflow-hidden">
      <Image
        src={projectImage}
        alt="Project Image"
        width={200}
        height={150}
        className="flex justify-center items-center rounded-lg w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between hover:fade-in-right hover:bg-black/90 hover:text-white transition duration-500 ease-in-out py-15">
        <h2 className="group-hover:visible invisible">{projectTitle}</h2>
        <h3 className="group-hover:visible invisible">{projectDesc}</h3>
        <div className="group-hover:visible invisible flex gap-5">
          <Link href="#" className="bg-blue-500 text-white px-2 py-2 rounded-[50px]">
            Github
          </Link>
          <Link href="#" className="bg-blue-500 text-white px-2 py-2 rounded-[50px]">
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
