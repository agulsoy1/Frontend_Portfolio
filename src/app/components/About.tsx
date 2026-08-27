import Image from "next/image";
import FadeInSections from "./FadeInSections";

const buttons = {
  education: "Education:",
  tools: "Technologies:",
  hobbies: "Hobbies:",
  certificates: "Certificates:",
  other_projects: "Other Works:",
};

const descriptions = {
  educationDesc: {
    school: "University of California, Santa Cruz",
    degrees: [
      "B.S. in Computer Science: Game Design",
      "B.A. in Games and Playable Media",
    ],
    image: "/assets/ucsc_degree.jpg",
    description: `As a double major, I gained experience in both the development 
    and design aspects of video game creation. My senior capstone projects involved 
    developing fully realized video games with teams of 8–10 members over a nine-month 
    period. Through these projects, I developed strong collaboration and communication 
    skills while working in an Agile environment to plan, track, and meet project 
    milestones on schedule.`,
  },
  toolsCategories: {
    Languages: {
      items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
      dark: "bg-[#526276]",
      light: "bg-[#f8efe3]",
    },
    Frontend: {
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Material UI",
        "Responsive Design",
        "REST APIs",
        "Axios",
      ],
      dark: "bg-[#475569]",
      light: "bg-[#f1e4d2]",
    },
    Backend: {
      items: [
        "Node.js",
        "Firebase",
        "Firebase Authentication",
        "Cloud Functions",
        "Firestore",
        "Supabase",
        "Stripe",
      ],
      dark: "bg-[#334155]",
      light: "bg-[#dfcdb7]",
    },
    Tools: {
      items: ["Git", "GitHub", "Vercel", "npm"],
      dark: "bg-[#1e293b]",
      light: "bg-[#c9b197]",
    },
    Testing: {
      items: ["Jest", "React Testing Library", "Vitest"],
      dark: "bg-[#172033]",
      light: "bg-[#aa8e70]",
    },
    Other: {
      items: [
        "Unity",
        "Unreal Engine",
        "C++",
        "C#",
        "Blender",
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      dark: "bg-[#0f172a]",
      light: "bg-[#826955]",
    },
  },
  certificates: [
    {
      title: "Frontend Simplified: Certificate of Graduation",
      issuer: "Frontend Simplified",
      date: "July 2026",
      image: "/assets/fes_certificate.jpg",
      description:
        "Completed a comprehensive course on frontend development, covering HTML, CSS, JavaScript, and modern frameworks. Gained practical experience through hands-on projects and real-world applications.",
    },
  ],
  hobbiesDesc:
    "Coding | Basketball | Video Games | Hiking | Bowling | Tennis | Swimming | Traveling | Biking",
  otherProjects: [
    {
      title: "Vulpecula",
      date: "June 2021",
      link: "https://teamlamp.itch.io/vulpecula",
      image: "/assets/vulpecula_poster.png",
      description:
        "Vulpecula is a 3D puzzle solving game where you collect spirits and guide them back home to the Celestial Realm. Traverse both Solar and Lunar Realms and use the spirits' unique abilities to aid you on your journey.  Keep in mind that the spirits are quite considerate, and they just might run away if they're seen by humans!",
    },
    {
      title: "Cursed Crops",
      date: "June 2022",
      link: "https://github.com/agulsoy1/cursed-crops.git",
      image: "/assets/cursed_crops_poster.png",
      description:
        "Welcome to the field, farmer! Play with up to three of your friends as the best combat farmers this side of the Mississippi, defending haunted farms from the evil animated vegetables they grow in the fields. Cleanse this curse by planting crops, but be ready to reap what you sow!",
    },
  ],
};

export default function About({ darkMode }: { darkMode: boolean }) {
  const cardStyle = `max-w-175 w-full flex flex-col items-start justify-center gap-5 p-5 rounded-xl border-2 ${darkMode ? "bg-[#020617] border-white" : "bg-[#6D5947] border-black"} text-[#f8efe3]`;
  const cardTitle = "font-extrabold text-xl text-white";
  return (
    <div
      className={`relative w-full h-full flex flex-col p-5 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <FadeInSections>
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Get To Know Me
        </h1>
      </FadeInSections>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center my-10 gap-8">
        <FadeInSections>
          <div className={`${cardStyle}`}>
            <h2 className={`${cardTitle}`}>{buttons.tools}</h2>
            <div className="flex flex-col gap-5 flex-wrap justify-around">
              {Object.entries(descriptions.toolsCategories).map(
                ([category, { items, dark, light }], index) => (
                  <div
                    key={category}
                    className={`flex flex-col items-start gap-2 ${index === 0 ? "mt-0" : "mt-7"}`}
                  >
                    <h3 className="font-medium text-lg">{category}</h3>
                    <ul className="flex flex-wrap font-light justify-start items-center gap-5">
                      {items.map((tool) => (
                        <li
                          key={tool}
                          className={`${darkMode ? dark : light} ${darkMode ? "text-white" : "text-black"} shadow-[5px_5px_15px_rgba(0,0,0,.5)] rounded-lg p-2`}
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </FadeInSections>
        <div className="w-full flex flex-col gap-8">
          <FadeInSections>
            <div className={`font-light ${cardStyle}`}>
              <h2 className={`${cardTitle} leading-7`}>
                {buttons.education}
                <br />
                <span className="font-normal">
                  {descriptions.educationDesc.school}
                </span>
              </h2>
              <div className={`${darkMode ? "bg-[#1e293b]" : "bg-[#524235]"} rounded-lg p-3 flex gap-5 items-center`}>
                <Image
                  src={descriptions.educationDesc.image}
                  alt="UCSC Degree"
                  width={300}
                  height={200}
                />
                <div className="flex flex-col gap-2 h-full justify-evenly">
                  <p>
                    <span className="font-medium">Degree #1:</span>
                    <br />
                    {descriptions.educationDesc.degrees[0]}
                  </p>
                  <p>
                    <span className="font-medium">Degree #2:</span>
                    <br />
                    {descriptions.educationDesc.degrees[1]}
                  </p>
                </div>
              </div>
              <p>
                {descriptions.educationDesc.description}
                <br /> These projects can be seen in my{" "}
                <span className="font-bold">Other Works</span> section below.
              </p>
            </div>
          </FadeInSections>
          <div className="w-full flex flex-col gap-8">
            <FadeInSections>
              <div className={`max-w-150 ${cardStyle}`}>
                <h2 className={cardTitle}>{buttons.certificates}</h2>
                {descriptions.certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center gap-5"
                  >
                    <div className="w-1/2 flex flex-col gap-2">
                      <p className="font-light">{cert.description}</p>
                      <div className="font-light">
                        <span className="font-bold">Issued:</span> {cert.date}
                      </div>
                      <div className="font-light">
                        <span className="font-bold">Issuer:</span> {cert.issuer}
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center text-center font-bold gap-2">
                      <div>{cert.title}</div>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={350}
                        height={150}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSections>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          <FadeInSections>
            <div className={`max-w-200 ${cardStyle}`}>
              <h2 className={cardTitle}>{buttons.other_projects}</h2>
              <div className="flex flex-col justify-center items-center gap-10">
                {descriptions.otherProjects.map((project) => (
                  <div
                    key={project.title}
                    className={`flex items-start justify-center gap-5`}
                  >
                    <div className="flex flex-col items-start justify-center gap-3">
                      <h3 className="text-lg font-extrabold">
                        {project.title}
                      </h3>
                      <div className="flex gap-5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={200}
                        />
                        <div className="flex flex-col justify-evenly">
                          <div>
                            <h3 className="font-semibold text-md mb-3">
                              Released:{" "}
                              <span className="font-light">{project.date}</span>
                            </h3>
                            <p className="text-md max-w-150">
                              {project.description}
                            </p>
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-md underline hover:opacity-80"
                          >
                            {project.link}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSections>
          <FadeInSections>
            <div className={`max-w-200 ${cardStyle}`}>
              <h2 className={cardTitle}>{buttons.hobbies}</h2>
              <p>{descriptions.hobbiesDesc}</p>
            </div>
          </FadeInSections>
        </div>
      </div>
    </div>
  );
}
