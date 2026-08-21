// import Image from "next/image";
// import { useEffect, useState } from "react";

// const tools = [
//   "Next.js",
//   "Node.js",
//   "React.js",
//   "Redux.js",
//   "Javascript",
//   "Typescript",
//   "Python",
//   "Tailwind CSS",
//   "HTML",
//   "CSS",
//   "Firebase",
//   "Supabase",
//   "Vercel",
//   "Git",
//   "Stripe",
// ];

// export default function TechSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === tools.length - 1 ? 0 : prevIndex + 1,
//       );
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative flex justify-center items-center h-full bg-black" style={{ height: "100px", width: "100%" }}>
//       <div
//         className="flex transition-transform duration-300"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {tools.map((tool, index) => (
//           <div
//             key={index}
//             className="flex text-white w-full shrink-0 text-center"
//           >
//             {tool}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
