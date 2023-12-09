"use client";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";

export default function ContactMeComponent() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = async (formData, e) => {
    setLoading(true);
    e.preventDefault();
    const res = await sendMail(formData);
    if (res.success) {
      notify(res.message);
    }
    setLoading(false);
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

  const notify = (message) => toast.success(message);

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

            {loading ? (
              <button
                type="button"
                className="w-36	h-12 mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90"
              >
                <svg
                  className="w-5 h-5 text-white animate-spin absolute left-1/2 top-1/2 -mt-2.5 -ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="  mt-3 transform rounded-md bg-indigo-500   p-3 hover:bg-violet-600 transition duration-500 hover:scale-90"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
