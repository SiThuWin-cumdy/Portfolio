"use client";
import EducationComponent from "@/components/Education";
import ExperienceComponent from "@/components/Experience";
import StarRatingComponent from "@/components/StarRating";
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import portfolio from "@/public/data/portfolio";

export default function AboutMeComponent() {
  const { skills, aboutMe, aboutMeDetail } = portfolio;
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div className=" mx-auto grid grid-cols-1 px-6 text-white lg:grid-cols-2 lg:gap-8 lg:pt-32 md:px-18 lg:px-24 xl:px-28">
        <div>
          <img
            className="rounded-xl"
            src="images/logos/about-me.jpg"
            title=""
            alt=""
          />
        </div>
        <div className="">
          <h3 className="font-light text-3xl  py-3 tracking-widest">
            ABOUT ME.
          </h3>
          <h3 className="text-3xl  font-bold py-3">
           {aboutMe}
          </h3>

          <p className="text-slate-400	 text-justify py-5 ">
            {aboutMeDetail}
          </p>
          <Link to="contactme" smooth={true} duration={800}>
            <button className="mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      <div className=" mx-auto grid grid-cols-1 px-6 text-white lg:grid-cols-3 lg:gap-8 lg:pt-32 md:px-18 lg:px-24 xl:px-28">
        <hr className="opacity-20 mb-10 col-span-3" />
        <h3 className="font-light tracking-widest text-3xl mb-10 col-span-3">
          EDUCATION & SKILLS
        </h3>
        <div className="Education  col-span-3 lg:col-span-1">
          <EducationComponent />
        </div>
        <div className="skill  mx-5 col-span-3 lg:col-span-2">
          <h3 className="font-bold text-2xl"> My skills</h3>
          <p className="text-slate-400	 text-justify py-5 ">
            I'm a Software Developer with over 5 years of experience. I code and
            create web elements for amazing people around the world. I like to
            work with new people. New people new Experiences.
          </p>
          {isMounted && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-6 lg:grid-flow-col   gap-2">
              {skills.map((s, index) => (
                <div key={index} className="flex items-center">
                  <h3 className="font-bold pr-2  basis-2/4">{s.displayName}</h3>
                  <StarRatingComponent skill={s.skill} className="basis-2/4" />
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
    </>
  );
}
