import { FiMail, FiMapPin } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
export default function ContactMeComponent() {
  return (
    <>
      <div className=" mx-auto mb-5 grid grid-cols-1 px-10 text-white lg:grid-cols-3 lg:gap-8 lg:pt-32 lg:px-28">
        <h3 className="font-light tracking-widest text-3xl  mb-3  col-span-3">
          GET IN TOUCH.
        </h3>

        <div className="bg-black p-10 col-span-3 mb-1 lg:col-span-1">
          <h3 className="font-bold text-2xl">
            What’s your story?
            <br /> Get in touch
          </h3>
          <p className="text-sm font-extralight mt-3">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <h4 className="font-bold text-lg flex items-center mt-3">
            <FiMapPin className="text-indigo-500" /> &nbsp; Yangon , Myanmar
          </h4>
          <h4 className="font-bold text-lg flex items-center mt-3">
            <FiMail className="text-indigo-500" /> &nbsp;
            sithuwin.cumdy@gmail.com
          </h4>
          <h4 className="font-bold text-lg flex items-center mt-3">
            <FaMobileAlt className="text-indigo-500" />
            &nbsp; +959968662646
          </h4>
        </div>

        <div className="bg-black p-10 col-span-3 lg:col-span-2">
          <h3 className="font-bold text-2xl">Say Something</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <input
              className="bg-transparent font-light p-3 border border-slate-500 rounded-md focus-visible:te"
              type="text"
              placeholder="Name *"
            />
            <input
              className="bg-transparent font-light p-3 border border-slate-500 rounded-md"
              type="email"
              placeholder="Email *"
            />
            <input
              className="bg-transparent font-light p-3 border border-slate-500 col-span-2 rounded-md"
              type="text"
              placeholder="Subject *"
            />
            <textarea
              className="bg-transparent font-light p-3 border border-slate-500 col-span-2 rounded-md"
              type="textarea"
              placeholder="Your message *"
            />
          </div>
          <button className="mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
