import portfolio from "@/public/data/portfolio";

export default function EducationComponent() {
  const { educationList } = portfolio;

  return (
    <>
      <ul className="bg-black outline-none list-none ">
        {educationList.map((t) => (
          <span key={t.id}>
            <li className="p-8">
              <span className="px-2 py-1 -ml-10 text-sm tracking-wider bg-indigo-500 font-light shadow-md shadow-indigo-700">
                {t.startDate} - {t.endDate}
              </span>
              <h6 className="font-bold mt-3">{t.course}</h6>
              <p className="font-light mt-1">{t.schoolName}</p>
            </li>
            <hr className="opacity-20" />
          </span>
        ))}
      </ul>
    </>
  );
}
