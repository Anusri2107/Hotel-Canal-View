import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";

function Updates() {
  const form1 = document.getElementById("form1");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let subscribeEmail = {
      email: data.email,
    };
    await axios
      .post("https://hotel-canal-view-6.onrender.com/subscribe", subscribeEmail)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Email subscribed successfully!");
          form1.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error.response.status === 400) {
          toast.error("Email already subscribed!", { icon: "⚠️" });
          form1.reset();
        } else {
          toast.error("There is an error!");
        }
      });
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg font-semibold font-face-gr">
        Get the Latest Updates
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} id="form1">
        <div className="flex flex-col items-center gap-2 xl:gap-0 xl:flex-row xl:space-x-5">
          <div className="w-full">
            <label htmlFor="email">
              <div className="flex items-center border-2 rounded-md bg-[color:var(--color1)]">
                <HiOutlineMail className="text-xl w-[50px] mx-auto" />
                <input
                  id="email"
                  type="email"
                  className="border-l-2 h-[40px] w-full p-5 focus:outline-none text-[color:var(--color1)] font-face-gr focus:ring-[color:var(--color1)] focus:border-[color:var(--color1)] "
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
              </div>

              {errors.email && (
                <div className="hidden">
                  {toast.error("Please enter a valid email")}
                </div>
              )}
            </label>
          </div>
          <button className="flex items-center justify-center hover:bg-[color:var(--color1)] bg-[color:var(--color1)] text-white rounded-lg px-5 py-2 font-face-gr">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updates;
