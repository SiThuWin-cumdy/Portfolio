"use client";
import EducationComponent from "@/components/Education";
import ExperienceComponent from "@/components/Experience";
import StarRatingComponent from "@/components/StarRating";
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const skills = [
  {
    displayName: "Angular",
    skill: 4,
  },
  {
    displayName: "Angular Material",
    skill: 4,
  },
  {
    displayName: "ASP.NET Core",
    skill: 4,
  },
  {
    displayName: "ASP.NET MVC",
    skill: 4,
  },
  {
    displayName: "MSSQL",
    skill: 4,
  },
  {
    displayName: "Javascript",
    skill: 4,
  },
  {
    displayName: "Jquery",
    skill: 4,
  },
  {
    displayName: "SCSS",
    skill: 4,
  },
  {
    displayName: "Bootstrap",
    skill: 4,
  },
  {
    displayName: "Tailwind CSS",
    skill: 4,
  },
  {
    displayName: "NextJs",
    skill: 3,
  },
  {
    displayName: "Ajax",
    skill: 3,
  },
  {
    displayName: "C#",
    skill: 3,
  },
  {
    displayName: "Prime NG",
    skill: 3,
  },
  {
    displayName: "LINQ",
    skill: 3,
  },
  {
    displayName: "NGRX",
    skill: 2,
  },
];
export default function AboutMeComponent() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div className="hover:text-blue-700 transition duration-1000 ease-in-out">
        <div className="container mx-auto grid grid-cols-2 gap-2 px-28 pt-32 text-white">
          <div>
            <img
              className="rounded-xl"
              src="images/logos/about-me.jpg"
              title=""
              alt=""
            />
          </div>
          <div className=" px-10">
            <h3 className="font-light text-3xl  py-3 tracking-widest">
              ABOUT ME.
            </h3>
            <h3 className="text-3xl  font-bold py-3">
              I'm a Software Developer with over 5 years of experience.
            </h3>

            <p className="text-slate-400	 text-justify py-5 ">
              I'm a Software Developer with over 5 years of experience. I'm from
              Myanmar. I code and create web elements for amazing people around
              the world. I like to work with new people. New people new
              Experiences.
            </p>
            <Link to="contactme" smooth={true} duration={800}>
              <button className="mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-3 gap-3 px-28 pt-32 text-white">
          <hr className="col-span-3 opacity-20 mb-10" />
          <h3 className="font-light tracking-widest text-3xl col-span-3 mb-10">
            EDUCATION & SKILLS
          </h3>
          <div className="Education mr-14">
            <EducationComponent />
          </div>
          <div className="skill col-span-2 mx-5">
            <h3 className="font-bold text-2xl"> My skills</h3>
            <p className="text-slate-400	 text-justify py-5 ">
              I'm a Software Developer with over 5 years of experience. I code
              and create web elements for amazing people around the world. I
              like to work with new people. New people new Experiences.
            </p>
            {isMounted && (
              <div className="grid grid-rows-6 grid-flow-col gap-2">
                {skills.map((s, index) => (
                  <div key={index} className="flex items-center">
                    <h3 className="font-bold pr-2  basis-2/4">
                      {s.displayName}
                    </h3>
                    <StarRatingComponent
                      skill={s.skill}
                      className="basis-2/4"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <hr className="col-span-3 opacity-20 my-10" />

          <div className="col-span-3">
            <ExperienceComponent />
          </div>
        </div>
      </div>
    </>
  );
}
