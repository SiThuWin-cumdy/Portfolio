const experienceList = [
  {
    id: "1",
    designation: "Software Developer",
    company: "Corporate IT Solution Co.Ltd",
    place: "Remote",
    startDate: "Nov 2022",
    endDate: "Present",
    jobType: "FULL-TIME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    responsibility: [
      `Developing and maintaining web application using Angular and Asp.net Core WebApi.`,
      `Designing and Implementing database schemas using MSSQL.`,
      `Collaborating with cross-functional teams to
       understand business requirements and develop
       solutions that meet those requirements.`,
      `Creating and consuming RESTful APIs using
       Asp.net Core.`,
      `Implementing responsive and accessible web
       designs using Angular.`,
      `Integrate third-party libraries and services into web
       applications to meet business requirement.`,
      `Writing clean and maintainable code that follows
       best practices and standards.`,
      `Debugging and troubleshotting issues in web
       applications.`,
      `Architected the new web application in Angular for
       Online Exhibition Management System`,
      `Architected the new web application in Angular to
       change multi-page Registration website into a
       single-page website.`,
      `Architected the new CMS website with dynamic
       menu and dynamic content.`,
      `Support to Junior.`,
    ],
  },
  {
    id: "2",
    designation: "Software Developer",
    company: "FTP",
    place: "Remote",
    startDate: "Jan 2022",
    endDate: "Nov 2022",
    jobType: "FULL-TIME",
    responsibility: [
      `Developing and maintaining web application using Angular.`,
      `Collaborating with cross-functional teams to
       understand business requirements and develop
       solutions that meet those requirements.`,
      `Implementing responsive and accessible web
       designs using Angular.`,
      `Integrate third-party libraries and services into web
       applications to meet business requirement.`,
      `Writing clean and maintainable code that follows
       best practices and standards.`,
      `Debugging and troubleshotting issues in web
       applications.`,
      `Work closely with TeamLeader and Project
       Manager.`,
    ],
  },
  {
    id: "3",
    designation: "Software Developer",
    company: "Corporate IT Solution Co.Ltd",
    place: "Remote",
    startDate: "Sept 2019",
    endDate: "Jan 2022",
    jobType: "FULL-TIME",
    responsibility: [
      `Developing and maintaining web application using Angular and Asp.net Core WebApi.`,
      `Designing and Implementing database schemas using MSSQL.`,
      `Collaborating with cross-functional teams to
       understand business requirements and develop
       solutions that meet those requirements.`,
      `Creating and consuming RESTful APIs using
       Asp.net Core.`,
      `Implementing responsive and accessible web
       designs using Angular.`,
      `Integrate third-party libraries and services into web
       applications to meet business requirement.`,
      `Writing clean and maintainable code that follows
       best practices and standards.`,
      `Debugging and troubleshotting issues in web
       applications.`,
      `Architected the new web application in Angular for
       Online Exhibition Management System`,
      `Architected the new web application in Angular to
       change multi-page Registration website into a
       single-page website.`,
      `Architected the new CMS website with dynamic
       menu and dynamic content.`,
      `Support to Junior.`,
    ],
  },
  {
    id: "4",
    designation: "Software Developer",
    company: "Thetys",
    place: "Yangon",
    startDate: "April 2019",
    endDate: "Sept 2019",
    jobType: "FULL-TIME",
    responsibility: [
      `Developing and maintaining web application using Vuejs and Asp.net WebAPI.`,
      `Designing and Implementing database schemas using MSSQL.`,
      `Creating and consuming RESTful APIs using Asp.net WebAPI`,
      `Implementing responsive and accessible web designs using Vuejs.`,
      `Integrate third-party libraries and services into web applications to meet business requirement.`,
      `Writing clean and maintainable code that follows best practices and standards.`,
      `Debugging and troubleshotting issues in web applications.`,
    ],
  },
  {
    id: "5",
    designation: "Junior Software Developer",
    company: "Marter Solutions",
    place: "Mandalay",
    startDate: "Feb 2018",
    endDate: "January 2019",
    jobType: "FULL-TIME",
    responsibility: [
      `Developing and maintaining web application using ASP.net MVC.`,
      `Designing and Implementing database schemas using MSSQL.`,
      `Debugging and troubleshotting issues in web application.`,
      `Support to TeamLead.`,
      `Software Application Testing.`,
      `Customer support & services.`,
    ],
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
            <li className="p-8 transition duration-300 ease-in hover:bg-indigo-500">
              <div className="relative">
                <h6 className="font-bold text-lg">{t.designation}</h6>
                <p className="font-extralight text-xs mt-1">
                  {t.company} | {t.place} | {t.startDate} - {t.endDate}
                </p>
                <div className="font-extralight text-sm text-justify w-4/5  mt-5 ml-10">
                  {t?.responsibility?.length > 0 && (
                    <ul className="list-disc">
                      {t?.responsibility?.map((r, index) => (
                        <span key={index}>
                          <li>{r}</li>
                        </span>
                      ))}
                    </ul>
                  )}
                </div>
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
