import FadeInSections from "../FadeInSections";
import { useState } from "react";
import TechnologyCard from "./TechCard";
import CertificationCard from "./CertificationCard";
import OtherWorksCard from "./OtherWorksCard";
import HobbiesCard from "./HobbiesCard";
import EducationCard from "./EducationCard";

export default function About({ darkMode }: { darkMode: boolean }) {
  const titles = [
    { key: "tech", label: "Technologies" },
    { key: "education", label: "Education" },
    { key: "certificates", label: "Certificates" },
    { key: "projects", label: "Projects" },
    { key: "hobbies", label: "Hobbies" },
  ];

  const [clicked, setClicked] = useState(titles[0].key);
  const selectedIndex = titles.findIndex((title) => title.key === clicked);

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-5 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <FadeInSections>
        <h1
          className={`text-3xl font-bold`}
        >
          Get To Know Me
        </h1>
      </FadeInSections>
      <FadeInSections>
        <div className="w-[60%] flex flex-col items-center justify-center my-10">
          <div className="relative w-full h-15 bg-black/30 rounded-t-[50px] flex flex-col items-center justify-center">
            <div
              className="absolute top-0 h-full bg-amber-950 rounded-t-[50px] transition-all duration-300"
              style={{
                width: `${100 / titles.length}%`,
                left: `${selectedIndex * (100 / titles.length)}%`,
              }}
            />

            <div className="z-10 w-full flex text-white font-bold">
              {titles.map((title) => (
                <button
                  key={title.key}
                  onClick={() => setClicked(title.key)}
                  className="flex-1 py-3"
                >
                  {title.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full bg-amber-900/50 pt-5 pb-10 px-10 rounded-b-[50px]">
            {clicked === "tech" && <TechnologyCard darkMode={darkMode} />}
            {clicked === "education" && <EducationCard darkMode={darkMode} />}
            {clicked === "certificates" && (
              <CertificationCard darkMode={darkMode} />
            )}
            {clicked === "projects" && <OtherWorksCard darkMode={darkMode} />}
            {clicked === "hobbies" && <HobbiesCard darkMode={darkMode} />}
          </div>
        </div>
      </FadeInSections>
    </div>
  );
}
