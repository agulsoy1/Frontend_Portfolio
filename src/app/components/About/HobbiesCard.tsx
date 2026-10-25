import { hobbiesDesc } from "./aboutData";

export default function HobbiesCard({ darkMode }: { darkMode: boolean }) {
  return (
    <div>
      {hobbiesDesc.map((hobby, index) => {
        return(
            <ul key={index} className={`flex items-center justify-evenly ${darkMode ? "text-white" : "text-black"}`}>
                <li>{hobby}</li>
            </ul>
        )
      })}
    </div>
  );
}
