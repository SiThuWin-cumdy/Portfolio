const experienceList = [
  {
    id: "1",
    designation: "Software Developer",
    company: "Corporate IT Solution Co.Ltd",
    place: "Remote",
    startDate: "Nov 2022",
    enddate: "Present",
    jobType: "FULL-TIME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    designation: "Software Developer",
    company: "FTP",
    place: "Remote",
    startDate: "Jan 2022",
    enddate: "Nov 2022",
    jobType: "FULL-TIME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    designation: "Software Developer",
    company: "Corporate IT Solution Co.Ltd",
    place: "Remote",
    startDate: "Sept 2019",
    enddate: "Jan 2022",
    jobType: "FULL-TIME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    designation: "Software Developer",
    company: "Thetys",
    place: "Yangon",
    startDate: "April 2019",
    enddate: "Sept 2019",
    jobType: "FULL-TIME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "5",
    designation: "Junior Software Developer",
    company: "Marter Solutions",
    place: "Mandalay",
    startDate: "Feb 2018",
    enddate: "January 2019",
    jobType: "FULL-TIME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function ExperienceComponent() {
  return (
    <>
      <h3 className="font-light tracking-widest text-3xl col-span-3 mb-10">
        EXPERIENCE.
      </h3>

      <ul className="bg-black outline-none list-none ">
        {experienceList.map((t) => (
          <span key={t.id}>
            <li className="p-8 grid grid-cols-5 gap-5">
              <div className=" "></div>
              <div className="col-span-4 relative pl-4">
                <h6 className="font-bold text-lg">{t.designation}</h6>
                <p className="font-extralight text-xs mt-1">
                  {t.company} | {t.place} | {t.startDate} - {t.enddate}
                </p>
                <p className="font-extralight text-sm text-justify w-4/5  mt-5">
                  {t.description}
                </p>
                <span className="px-2 py-1 text-xs tracking-wider rounded-md bg-indigo-500 font-light shadow-md shadow-indigo-700 absolute top-0 right-0">
                  {t.jobType}
                </span>
              </div>
            </li>
            <hr className="opacity-20" />
          </span>
        ))}
      </ul>
    </>
  );
}
