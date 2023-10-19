"use client";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
export default function ContactMeComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = async (formData, e) => {
    e.preventDefault();
    const res = await sendMail(formData);
    e.target.reset();
  };

  const sendMail = async (formData) => {
    try {
      // const apiURL = process.env.NEXT_PUBLIC_API_ROUT;
      const res = await fetch(`/api/sendemail`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Faild to send email");
      }
      return res.json();
    } catch (error) {
      console.log("Error sending email", error);
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <input
                  className="w-full bg-transparent font-light p-3 border border-slate-500 rounded-md focus-visible:te"
                  type="text"
                  placeholder="Name *"
                  {...register("name", { required: true })}
                />
                {errors?.name?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Name is required
                  </p>
                )}
              </div>

              <div>
                <input
                  className="w-full bg-transparent font-light p-3 border border-slate-500 rounded-md"
                  type="email"
                  placeholder="Email *"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Email is required
                  </p>
                )}
              </div>

              <div className="col-span-2 ">
                <input
                  className="w-full bg-transparent font-light p-3 border border-slate-500 rounded-md"
                  type="text"
                  placeholder="Subject *"
                  {...register("subject", { required: true })}
                />
                {errors?.subject?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Subject is required
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <textarea
                  className="w-full bg-transparent font-light p-3 border border-slate-500  rounded-md"
                  type="textarea"
                  placeholder="Your message *"
                  {...register("message", { required: true })}
                />
                {errors?.message?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Message is required
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
