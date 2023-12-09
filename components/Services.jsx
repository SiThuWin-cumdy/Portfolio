import { PiMonitorThin } from "react-icons/pi";

const services = [
  {
    id: "1",
    name: "Design",
    description: `Transform your online vision into reality with our Web Design Service. Our expert designers blend creativity and functionality to craft visually stunning and user-friendly websites that leave a lasting impact.`,
  },
  {
    id: "2",
    name: "WebDevelopment",
    description: `Elevate your online presence with our Web Development Service – where innovation meets functionality. Our expert team crafts dynamic and responsive websites tailored to your business needs, ensuring a seamless and engaging user experience.`,
  },
  {
    id: "3",
    name: "UI/UX",
    description: `Elevate user experiences with our UI/UX service. Our design experts blend creativity and functionality to craft intuitive interfaces, ensuring your digital presence engages and delights users effortlessly.`,
  },
  {
    id: "4",
    name: "Database Structure",
    description: `Unlock the power of organized data with our Database Structure Service. Streamline information, enhance efficiency, and optimize performance as we design and implement robust database structures tailored to your specific requirements.`,
  },
];

export default function ServicesComponent() {
  return (
    <>
      <div className=" mx-auto  mb-5 grid  grid-cols-1 gap-4 px-10 text-white  lg:grid-cols-2 lg:pt-32 lg:px-28">
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
