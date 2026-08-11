"use client";
import Image from "next/image";
import React, { useState } from "react";

type TechStackType = {
  techName: string;
  techIcon: string;
  techAlt: string;
};

export default function TechStack({
  techName,
  techIcon,
  techAlt,
}: TechStackType) {
  const [showName, setShowName] = useState(false);
  return (
    <li className="flex flex-col items-center gap-1" onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)}>
      <Image src={techIcon} alt={techAlt} width={75} height={75} className="xl:w-18.75 xl:h-18.75 w-12 h-12" />
      <span className={`${showName ? "opacity-100 translate-y-0 transition duration-300 ease-in-out" : "opacity-0 translate-y-2 transition duration-300 ease-in-out"}`}>{techName}</span>
    </li>
  );
}