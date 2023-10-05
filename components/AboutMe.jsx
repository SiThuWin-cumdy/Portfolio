import EducationComponent from "@/components/Education";

export default function AboutMeComponent() {
  return (
    <>
      <div className="hover:text-blue-700 transition duration-1000 ease-in-out">
        <div className="container mx-auto grid grid-cols-2 gap-2 px-28 pt-32 text-white">
          <div>
            <img
              src="https://sergio-react.vercel.app/static/img/about-me.png"
              title=""
              alt=""
            />
          </div>
          <div className="py-20 px-10">
            <h3 className="font-light text-3xl  py-3 tracking-widest">
              ABOUT ME.
            </h3>
            <h3 className="text-3xl  font-bold py-3">
              I'm a Software Developer with over 3 years of experience.
            </h3>

            <p className="text-slate-400	 text-justify py-5 max-w-md	">
              I'm a Freelancer Front-end Developer with over 3 years of
              experience. I'm from San Francisco. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people new Experiences.
            </p>
            <button className="mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
              Contact Me
            </button>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-3 gap-3 px-28 pt-32 text-white">
          <h3 className="font-light tracking-widest text-3xl col-span-3 mb-10">
            EDUCATION & SKILLS
          </h3>
          <div className="Education mr-14">
            <EducationComponent />
          </div>
          <div className="skill col-span-2 mx-5">
            <h3 className="font-bold text-2xl"> My skills</h3>
            <p className="text-slate-400	 text-justify py-5 max-w-md	">
              I'm a Freelancer Front-end Developer with over 3 years of
              experience. I code and create web elements for amazing people
              around the world. I like work with new people. New people new
              Experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
