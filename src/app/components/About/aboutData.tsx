import Education from "@/app/types/Education";
import Certification from "@/app/types/Certification";
import OtherWorks from "@/app/types/OtherWorks";
import Technology from "@/app/types/Technology";

export const educationData: Education = {
  date: ["September 2017", "August 2022"],
  school: "University of California, Santa Cruz",
  degreeType: ["Bachelor of Science", "Bachelor of Arts"],
  degrees: ["Computer Science: Game Design", "Games and Playable Media"],
  image: "/assets/ucsc_degree.jpg",
  description: `As a double major, I gained experience in both game development and design,
  completing nine-month senior capstone projects with teams of 8–10. These projects strengthened 
  my collaboration and communication skills while working in an Agile environment.
`,
};

export const toolCategories: Technology[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    dark: "bg-[#526276]",
    light: "bg-[#f8efe3]",
  },
  {
    category: "Frontend",
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
  {
    category: "Backend",
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
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel", "npm"],
    dark: "bg-[#1e293b]",
    light: "bg-[#c9b197]",
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Vitest"],
    dark: "bg-[#172033]",
    light: "bg-[#aa8e70]",
  },
  {
    category: "Other",
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
];

export const certificates: Certification[] = [
  {
    title: "Frontend Simplified: Certificate of Graduation",
    issuer: "Frontend Simplified",
    date: "July 2026",
    image: "/assets/fes_certificate.jpg",
    description:
      "Completed a comprehensive course on frontend development, covering HTML, CSS, JavaScript, and modern frameworks. Gained practical experience through hands-on projects and real-world applications.",
  },
];

export const hobbiesDesc = [
  "Coding",
  "Basketball",
  "Video Games",
  "Hiking",
  "Bowling",
  "Tennis",
  "Swimming",
  "Traveling",
  "Biking",
];

export const otherProjects: OtherWorks[] = [
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
];
