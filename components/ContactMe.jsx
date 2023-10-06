import { FiMail, FiMapPin } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
export default function ContactMeComponent() {
  return (
    <>
      <div className="container mx-auto mb-5 grid grid-cols-3 gap-3 px-28 pt-32 text-white">
        <h3 className="font-light tracking-widest text-3xl col-span-3 mb-3">
          GET IN TOUCH.
        </h3>

        <div className="bg-black p-10">
          <h3 className="font-bold text-2xl">
            What’s your story?
            <br /> Get in touch
          </h3>
          <p className="text-sm font-extralight mt-3">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>
          <h4 className="font-bold text-lg flex items-center mt-3">
            <FiMapPin /> &nbsp; Yangon , Myanmar
          </h4>
          <h4 className="font-bold text-lg flex items-center mt-3">
            <FiMail /> &nbsp; sithuwin.cumdy@gmail.com
          </h4>
          <h4 className="font-bold text-lg flex items-center mt-3">
            <FaMobileAlt />
            &nbsp; +959968662646
          </h4>
        </div>

        <div className="bg-black p-10 col-span-2">
          <h3 className="font-bold text-2xl">Say Something</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <input
              className="bg-transparent font-light p-3 border border-slate-500 rounded-md"
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
