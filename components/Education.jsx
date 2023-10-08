const educationList = [
  {
    id: "1",
    course: "Graphic Designer",
    schoolName: "International Design Institute",
    startDate: "2010",
    enddate: "2012",
  },
  {
    id: "2",
    course: "Web Development",
    schoolName: "International Design Institute",
    startDate: "2010",
    enddate: "2012",
  },
  {
    id: "3",
    course: "UI / UX",
    schoolName: "International Design Institute",
    startDate: "2010",
    enddate: "2012",
  },
];
export default function EducationComponent() {
  return (
    <>
      <ul className="bg-black outline-none list-none ">
        {educationList.map((t) => (
          <span key={t.id}>
            <li className="p-8">
              <span className="px-2 py-1 -ml-10 text-sm tracking-wider bg-indigo-500 font-light shadow-md shadow-indigo-700">
                {t.startDate} - {t.enddate}
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
