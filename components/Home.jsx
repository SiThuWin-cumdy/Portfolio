"use client";
import Typewriter from "typewriter-effect";
export default function HomeComponent() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-2  h-screen	 px-24 pt-32 text-white">
        <div className="py-20">
          <h3 className="text-2xl  py-3">Hello, I am</h3>
          <h1 className="text-5xl   font-bold py-3">Si Thu Win</h1>
          <h5 className=" py-3 text-lg font-semibold overflow-hidden flex">
            I Am Passionate &nbsp;
            <Typewriter
              options={{
                strings: ["Web Developer", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h5>

          <p className=" text-justify py-5 max-w-md	">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <button className="mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
            Download CV
          </button>
        </div>
        <div>
          <img
            src="https://sergio-react.vercel.app/static/img/home-banner.png"
            title=""
            alt=""
          />
        </div>
      </div>
    </>
  );
}
