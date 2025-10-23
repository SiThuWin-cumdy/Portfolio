"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import portfolio from "@/public/data/portfolio";

export default function HomeComponent() {
  const [mounted, setMounted] = useState(false);
  const { serviceSkills, serviceSlogun } = portfolio;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen">
      <div className="mx-auto grid grid-cols-1 px-6 text-white lg:grid-cols-2  lg:pt-28 md:px-18 lg:px-24 xl:px-28">
        <div className="py-20">
          <h3 className="text-2xl py-3">Hello, I am</h3>
          <h1 className="text-5xl font-bold py-3">Si Thu Win</h1>
          <h5 className="py-3 text-lg font-semibold overflow-hidden flex items-center">
            I Am Passionate &nbsp;
            <Typewriter
              options={{
                strings: serviceSkills,
                autoStart: true,
                loop: true,
              }}
            />
          </h5>

          <p className="text-justify py-5 max-w-md">{serviceSlogun}</p>

          <a
            href="files/AngularDeveloper_SiThuWin.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-3 transform rounded-md bg-indigo-500 p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
              Download CV
            </button>
          </a>
        </div>
        <div className="py-20">
          <img
            className="rounded-xl"
            src="images/logos/home-profile.jpg"
            title=""
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
