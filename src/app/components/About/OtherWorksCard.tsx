import { otherProjects } from "./aboutData";

export default function OtherWorksCard({ darkMode }: { darkMode: boolean }) {
  return (
    <div>
      {otherProjects.map((work, index) => (
        <section key={index} className="my-5">
          <h2 className={`${darkMode ? "text-white" : "text-black"}`}>
            {work.title}
          </h2>
          <p className={`${darkMode ? "text-white" : "text-black"}`}>
            {work.description}
          </p>
          <hr
            className={`my-4 border ${darkMode ? "border-white" : "border-black"}`}
          />
        </section>
      ))}
    </div>
  );
}
