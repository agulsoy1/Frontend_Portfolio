import { educationData } from "./aboutData";
import Image from "next/image";

export default function EducationCard({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="font-extrabold text-2xl">{educationData.school}</h2>
      <ul className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 text-left">
          {educationData.degreeType.map((type, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-2 justify-center items-center bg-amber-950/50 rounded-l-xl p-3"
            >
              <p
                className={`text-xl text-white font-extralight flex ${darkMode ? "text-white" : "text-black"}`}
              >
                {type}
              </p>
              <p
                className={`text-md flex flex-wrap ${darkMode ? "text-white" : "text-black font-bold"}`}
              >
                {educationData.degrees[index]}
              </p>
            </div>
          ))}
        </div>
        <Image
          src={educationData.image}
          alt="Education"
          className="w-300"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-4 text-right">
          <p
            className={`w-1/2 ${darkMode ? "text-white" : "text-black"} bg-amber-950/50 rounded-r-xl p-4`}
          >
            <h3 className="font-extrabold">Years of education:</h3>
            <h4 className="font-bold">From</h4>
            {educationData.date[0]}
            <h4 className="font-bold">To</h4>
            {educationData.date[1]}
          </p>
          <p
            className={`w-1/2 h-1/2 ${darkMode ? "text-white" : "text-black"} bg-amber-950/50 rounded-r-xl p-4`}
          >
            {educationData.description}
          </p>
        </div>
      </ul>
    </div>
  );
}
