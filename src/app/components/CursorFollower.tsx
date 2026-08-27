"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const [positions, setPositions] = useState(
    Array.from({ length: 10 }, () => ({ x: 0, y: 0 })),
  );
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

    };
    const animate = () => {
      setPositions((prev) => {
        const newPositions = [...prev];

        newPositions[0] = {
          x: prev[0].x + (mousePosition.current.x - prev[0].x) * 0.15,
          y: prev[0].y + (mousePosition.current.y - prev[0].y) * 0.15,
        };

        for(let i = 1; i < newPositions.length; i++){
          newPositions[i] = {
            x: prev[i].x + (prev[i-1].x - prev[i].x) * .15,
            y: prev[i].y + (prev[i-1].y - prev[i].y) * .15,
          }
        }

        return newPositions;
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      {positions.map((position, index) => {
        const size = 40 - index * 2;
        const opacity = 0.2 - index * 0.02;
        return (
          <div
            key={index}
            className="fixed rounded-[10px] bg-white pointer-events-none z-200"
            style={{
              width: size,
              height: size,
              left: position.x,
              top: position.y,
              opacity: opacity,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}
