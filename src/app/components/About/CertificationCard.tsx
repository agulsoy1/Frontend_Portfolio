import Image from "next/image";
import { certificates } from "./aboutData";
import Category from "../Category";

export default function CertificateCard({ darkMode }: { darkMode: boolean }) {
  return (
    <div>
      {certificates.map((certificate, index) => {
        return (
          <Category key={index}>
            <h2
              className={`${darkMode ? "text-white" : "text-black"} font-bold text-lg`}
            >
              {certificate.title}
            </h2>
            <p className={`${darkMode ? "text-white" : "text-black"}`}>
              {certificate.issuer}
            </p>
            <p className={`${darkMode ? "text-white" : "text-black"}`}>
              {certificate.date}
            </p>
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={300}
              height={200}
            />
            <p className={`${darkMode ? "text-white" : "text-black"}`}>
              {certificate.description}
            </p>
          </Category>
        );
      })}
    </div>
  );
}