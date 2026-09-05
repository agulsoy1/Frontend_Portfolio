import Image from "next/image";
import Link from "next/link";
import Background_Anim from "./Background_Anim";

export default function Hero({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className={`relative w-full flex xl:flex-row flex-col items-center justify-center min-h-screen gap-1 xl:gap-5 overflow-hidden pt-30 xl:pt-0`}
    >
      <div
        className={`order-2 flex flex-col items-center xl:items-start gap-4 md:p-5 py-2 rounded-lg`}
      >
        <div className="flex flex-col text-center xl:text-left sm:p-0 px-5 gap-4 z-100">
          <h1 className="lg:text-[55px] text-[35px] font-light fade-in fade-in-delay-250 transition-opacity">
            Hi, I&apos;m{" "}
            <span
              className={`italic font-medium ${darkMode ? "text-[#d8c4ad]" : "text-[#1e293b]"}`}
            >
              Alexandre T. Gulsoy
            </span>
          </h1>
          <p
            className={`lg:text-[23px] max-w-165 text-[16px] fade-in fade-in-delay-500 transition-opacity shadow-[10px_10px_15px_rgba(0,0,0,0.15)] 
            ${
              darkMode
                ? "bg-[radial-gradient(circle_at_center,#1e293b_0%,#0f172a_35%,#020617_100%)]"
                : "bg-[radial-gradient(circle_at_center,#f1e4d2_0%,#d8c4ad_35%,#826955_100%)]"
            } p-5 rounded-xl`}
          >
            I am a junior software developer driven by curiosity and a passion
            for creative problem-solving. I build responsive, intuitive web
            applications that create meaningful, user-centered experiences.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 z-50 relative">
            <Link
              href="https://www.linkedin.com/in/alexandre-turgut-gulsoy-1063b62c"
              className="hover:scale-125 bg-blue-500 text-white px-2 py-2 rounded-[50%] transition-transform fade-in fade-in-delay-750"
              target="_blank"
            >
              <Image
                src="/assets/linkedin-in-brands-solid-full (1).svg"
                alt="Contact"
                width={25}
                height={25}
                className="invert"
              />
            </Link>
          <Link
            href="https://github.com/agulsoy1"
            className="hover:scale-125 bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce transition-transform fade-in-delay-1000"
            target="_blank"
          >
            <Image
              src="/assets/github-brands-solid-full.svg"
              alt="Contact"
              width={25}
              height={25}
              className="invert"
            />
          </Link>
          <a
            href="/Alex_Gulsoy_Resume.pdf"
            download
            className="hover:scale-125 bg-blue-500 text-white px-2 py-2 rounded-[50%] button-bounce transition-transform fade-in-delay-1250"
          >
            <Image
              src="/assets/file-pdf-regular-full.svg"
              alt="Contact"
              width={25}
              height={25}
              className="invert"
            />
          </a>
        </div>
      </div>
      <div className="order-1">
        <figure
          className={`relative z-100 fade-in fade-in-delay-0 min-w-60 min-h-75 
                    w-[clamp(100px,25vw,450px)]
                    h-[clamp(150px,30vw,550px)]
                    rounded-[50%] border-4 
                    ${darkMode ? "border-white" : "bg-linear-to-r from-black to-[#c0c0c0]"} overflow-hidden shadow-[-5px_5px_10px_rgba(0,0,0,0.25)]`}
        >
          <Image
            src="/assets/profile_img_wbg.jpg"
            alt="Profile Picture"
            width={800}
            height={980}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </figure>
      </div>
      <Background_Anim darkMode={darkMode} />
    </section>
  );
}
