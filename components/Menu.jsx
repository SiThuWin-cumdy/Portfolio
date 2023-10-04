import FooterComponent from "@/components/Footer";
export default function MenuComponent() {
  return (
    <>
      <div className=" sticky top-0 flex flex-col w-56 min-h-screen bg-white rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-32 ">
          <div className=" w-24 h-24 overflow-hidden rounded-full border-4 border-indigo-500">
            <img
              src="https://sergio-react.vercel.app/static/img/about-me.jpg"
              title=""
              alt=""
            />
          </div>
        </div>
        <h3 className="text-2xl flex items-center justify-center uppercase text-indigo-500 pb-3 shadow-md">
          Si Thu Win
        </h3>
        <ul className="flex flex-col py-4">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home"></i>
              </span>
              <span className="text-sm font-medium">HOME</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-music"></i>
              </span>
              <span className="text-sm font-medium">ABOUT ME</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink"></i>
              </span>
              <span className="text-sm font-medium">SERVICES</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-shopping-bag"></i>
              </span>
              <span className="text-sm font-medium">BLOGS</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-chat"></i>
              </span>
              <span className="text-sm font-medium">CONTACT ME </span>
            </a>
          </li>
        </ul>

        <div className="flex items-end flex-grow w-full justify-center py-3">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
