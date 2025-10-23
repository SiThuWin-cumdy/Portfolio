import { PiMonitorThin } from "react-icons/pi";
import portfolio from "@/public/data/portfolio";
export default function ServicesComponent() {
  const { services } = portfolio;
  return (
    <>
      <div className=" mx-auto  mb-5 grid  grid-cols-1 gap-4 px-6 text-white  lg:grid-cols-2 lg:pt-32 md:px-18 lg:px-24 xl:px-28">
        <h3 className="font-light tracking-widest text-3xl mb-10  lg:col-span-2">
          WHAT I DO?
        </h3>
        {services.map((t) => (
          <div
            key={t.id}
            className="px-14 py-10 bg-black  grid grid-cols-4 gap-4 transition duration-300 ease-in hover:bg-indigo-500"
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
