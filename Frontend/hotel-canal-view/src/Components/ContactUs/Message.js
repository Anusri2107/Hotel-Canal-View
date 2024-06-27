import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Message() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let messageData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    await axios
      .post("https://hotel-canal-view.vercel.app/message", messageData)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Message sent successfully!");
          const form = document.getElementById("form");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("There is an error!");
      });
  };

  return (
    <div>
      <div>
        <h1 className="text-lg font-face-gr-bold">MESSAGE US</h1>
        <div>
          <div className="py-2 px-4 mx-auto max-w-screen-md font-face-gr">
            <p
              className="mb-4 font-light text-left  
                          text-gray-500 text-lg font-face-ta"
            >
              Got a issue? Want to send feedback? Need details about our Rates?
              Let us know.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="form"
              className="font-face-ta"
            >
              <div className="flex flex-row">
                <div className="w-1/2 pr-2 ">
                  <label
                    htmlFor="firstName"
                    className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-none focus:ring-[color:var(--color1)]"
                    placeholder="Enter First Name"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor="firstName"
                    className="block my-2 text-left text-sm  
                                          font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="shadow-sm bg-gray-50 border  
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-none focus:ring-[color:var(--color1)]"
                    placeholder="Enter Last Name"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="shadow-sm bg-gray-50 border  
                                      border-gray-300 text-gray-900  
                                      text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-none focus:ring-[color:var(--color1)]"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  className="block p-3 w-full text-sm  
                                      text-gray-900 bg-gray-50 rounded-lg  
                                      border border-gray-300 shadow-sm focus:outline-none focus:border-none focus:ring-[color:var(--color1)]"
                  placeholder="What issue/suggestion do you have?"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  rows="6"
                  className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-50 rounded-lg  
                                         shadow-sm border border-gray-300 focus:outline-none focus:border-none focus:ring-[color:var(--color1)]"
                  placeholder="Your message"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="mt-2 p-2 float-right text-white font-face-fl   
                                   rounded-lg border-[color:var(--color1)]  
                                   bg-[color:var(--color1)] hover:scale-105"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
