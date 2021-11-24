import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      450,
      450,
      "JPEG",
      50,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const dataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};

const AddEvent = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const file = data.img[0];
    // console.log();
    const image = await resizeFile(file);
    const newFile = dataURIToBlob(image);
    // console.log(newFile);
    // console.log(image);
    // // console.log(img);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("image", newFile);
    // console.log(formData);
    console.log(data);
    fetch("http://localhost:5000/events", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // setSuccess("Successfully Added");
          alert("heyy");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="font-semibold">Event Title</label>
            <input
              className="border w-full p-3"
              {...register("title", { required: true })}
              placeholder="Enter Title"
            />
            <span className="text-red-600 font-semibold">
              {errors.title && "Fill this title form"}
            </span>
          </div>
          <div>
            <label className="font-semibold">Event Date</label>
            <input
              className="border w-full p-3"
              {...register("date", { required: true })}
              placeholder="Event date"
            />
            <span className="text-red-600 font-semibold">
              {errors.date && "Fill this date form"}
            </span>
          </div>
          <div>
            <label className="font-semibold">Description</label>
            <input
              className="border w-full p-3"
              {...register("description", { required: true })}
              placeholder="Enter Description"
            />
            <span className="text-red-600 font-semibold">
              {errors.description && "Fill this description"}
            </span>
          </div>
          <div>
            <label className="font-semibold">Banner</label>
            <input
              type="file"
              className="border w-full p-3"
              {...register("img", { required: true })}
              placeholder="enter Img Link"
            />
            <span className="text-red-600 font-semibold">
              {errors.img && "Fill this img form"}
            </span>
          </div>
        </div>
        <div className="text-right mt-6">
          <input
            className="px-12 rounded py-3 text-white bg-gray-700"
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
