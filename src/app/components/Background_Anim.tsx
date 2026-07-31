"use client";

import { useMemo } from "react";

export default function Background_Anim() {
  const particles = useMemo(() => {
    return Array.from({ length: 100 }).map((_, index) => ({
      id: index,
      size: (() => Math.random() * 20 + 15)(),
      delay: (() => Math.random() * 5)(),
      x: (() => Math.random() * 100)(),
      y: (() => Math.random() * 100)(),
    }));
  }, []);

  return (
    <div className="absolute w-full h-screen inset-0 overflow-hidden">
      {particles.map(({ id, size, delay, x, y }) => (
        <div
          key={id}
          className="absolute opacity-25 m-5 bg-white rounded-[10px] fade-in pulse-in-out"
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
}
