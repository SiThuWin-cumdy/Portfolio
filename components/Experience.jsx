import portfolio from "@/public/data/portfolio";

export default function ExperienceComponent() {
  const { experienceList } = portfolio;
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
