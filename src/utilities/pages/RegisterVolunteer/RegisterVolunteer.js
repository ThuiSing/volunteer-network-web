import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/logos/Group 1329.png";

const RegisterVolunteer = () => {
  const [event, setEvent] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  // console.log(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/events/${id}`)
      .then((res) => setEvent(res.data));
  }, []);

  //data
  const date = new Date();
  let currentMonth;
  if (date.getMonth() < 10) {
    currentMonth = `0${date.getMonth()}`;
  } else {
    currentMonth = date.getMonth();
  }
  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    data.image = event.image;
    console.log(data);
    axios.post("http://localhost:5000/volunteers", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        history.push("/");
      }
    });
  });

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-2 md:mx-0">
      <div className="md:w-2/5 bg-white py-12 px-8 border-2">
        <div>
          <Link to="/">
            <img className="w-72 mx-auto" src={logo} alt="logo" />
          </Link>
        </div>
        <div className=" mt-14">
          <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
            <div>
              <input
                defaultValue={user?.displayName}
                className="border-b-2 p-2 outline-none w-full"
                {...register("name", { required: true })}
                placeholder="Name"
              />
              <span className="text-red-900">
                {errors.name && "Name is required"}
              </span>
            </div>
            <div>
              <input
                className="border-b-2 p-2 outline-none w-full"
                defaultValue={user.email}
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                readOnly
              />
              <span className="text-red-900">
                {errors.email && "Email is required"}
              </span>
            </div>
            <div>
              <input
                className="border-b-2 p-2 outline-none w-full"
                type="date"
                defaultValue={`${date.getFullYear()}-${currentMonth}-${date.getDate()}`}
                {...register("date", { required: true })}
                placeholder="Date"
              />
              <span className="text-red-900">
                {errors.date && "Date is required"}
              </span>
            </div>
            <div>
              <input
                defaultValue={event.description}
                className="border-b-2 p-2 outline-none w-full"
                {...register("description", { required: true })}
                placeholder="Description"
              />
              <span className="text-red-900">
                {errors.description && "Description is required"}
              </span>
            </div>
            <div>
              <input
                defaultValue={event?.title}
                className="border-b-2 p-2 outline-none w-full"
                {...register("title", { required: true })}
                placeholder="Organize books at library"
              />
              <span className="text-red-900">
                {errors.event && "Organize books at library is required"}
              </span>
            </div>

            <button type="submit" className="bg-blue-400 text-white py-3 mt-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterVolunteer;
