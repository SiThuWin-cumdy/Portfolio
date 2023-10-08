import { PiMonitorThin } from "react-icons/pi";

const services = [
  {
    id: "1",
    name: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    name: "WebDevelopment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    name: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    name: "Database Structure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function ServicesComponent() {
  return (
    <>
      <div className="container mx-auto  mb-5 grid  grid-cols-1 gap-4 px-28 pt-32 text-white  lg:grid-cols-2 ">
        <h3 className="font-light tracking-widest text-3xl mb-10  lg:col-span-2">
          WHAT I DO?
        </h3>
        {services.map((t) => (
          <div
            key={t.id}
            className="p-14 bg-black  grid grid-cols-4 gap-4 transition duration-300 ease-in hover:bg-indigo-500"
          >
            <div className="mx-auto">
              <PiMonitorThin className="text-white text-6xl lg:text-8xl" />
            </div>
            <div className="col-span-3">
              <h3 className="font-bold text-xl"> {t.name}</h3>
              <p className="font-extralight text-sm mt-3 text-justify">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
