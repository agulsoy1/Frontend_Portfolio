"use client";

// import { useEffect, useRef } from "react";

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// export default function Background_Anim({ darkMode }: { darkMode: boolean }) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const particles = Array.from({ length: 500 }).map((_, index) => {
//     const columns = 30;
//     const rows = 30;

//     const column = (index % columns) * (100 / columns);
//     const row = Math.floor(index / columns) * (200 / rows);

//     return {
//       id: index,
//       size: 89,
//       x: column,
//       y: row,
//     };
//   });

//   useEffect(() => {
//     const container = containerRef.current;

//     if (!container) return;

//     const squares = Array.from(
//       container.querySelectorAll<HTMLDivElement>(".particle"),
//     );

//     const handleMouseMove = (event: MouseEvent) => {
//       const rect = container.getBoundingClientRect();

//       const mouseX = event.clientX - rect.left;
//       const mouseY = event.clientY - rect.top;

//       squares.forEach((square) => {
//         const squareX =
//           (parseFloat(square.dataset.x || "0") / 100) * rect.width;
//         const squareY =
//           (parseFloat(square.dataset.y || "0") / 100) * rect.height;

//         const distance = Math.hypot(mouseX - squareX, mouseY - squareY);
//         const radius = 200;

//         const proximity = Math.max(0, 1 - distance / radius);

//         const scale = 1 - proximity * 0.8;
//         const opacity = 0.25 * (1 - proximity);

//         square.style.transform = `scale(${scale})`;
//         square.style.opacity = `${opacity}`;
//       });
//     };

//     const handleMouseLeave = () => {
//       squares.forEach((square) => {
//         square.style.transform = "scale(1)";
//         square.style.opacity = "0.25";
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("blur", handleMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("blur", handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 overflow-hidden pointer-events-none"
//     >
//       {particles.map(({ id, size, x, y }) => (
//         <div
//           key={id}
//           data-x={x}
//           data-y={y}
//           className={`particle absolute rounded-[5px] ${
//             darkMode ? "bg-white" : "bg-black"
//           }`}
//           style={{
//             width: `${size}px`,
//             height: `${size}px`,
//             left: `${x}%`,
//             top: `${y}%`,
//             opacity: 0.25,
//             transform: "scale(1)",
//             transition: "transform 150ms ease-out, opacity 150ms ease-out",
//           }}
//         />
//       ))}
//     </div>
//   );
// }


export default function Background_Anim({darkMode}: {darkMode: boolean}) {
  const particles = Array.from({ length: 200 }).map((_, index) => ({
    id: index,
    size: pseudoRandom(index * 4 + 1) * 20 + 15,
    // delay: pseudoRandom(index * 4 + 2) * 5,
    x: pseudoRandom(index * 4 + 3) * 100,
    y: pseudoRandom(index * 4 + 4) * 100,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(({ id, size, x, y }) => (
        <div
          key={id}
          className={`absolute opacity-25 rounded-[5px] fade-in pulse-in-out ${darkMode ? "bg-white" : "bg-black"}`}
          style={{
            width: `${size.toFixed(2)}px`,
            height: `${size.toFixed(2)}px`,
            left: `${x.toFixed(2)}%`,
            top: `${y.toFixed(2)}%`,
            animationDelay: `-${(pseudoRandom(id * 4 + 2) * 5).toFixed(2)}s`,
            // animationDelay: `${delay.toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
