import React from "react";
import { useHistory } from "react-router";
const Event = ({ event, styles }) => {
  const history = useHistory();
  console.log(styles);
  const { _id, title, image } = event;
  console.log(image);
  const handleEvent = (id) => {
    // console.log(id);
    history.push(`/register-volunteer/${id}`);
  };
  return (
    <div
      onClick={() => handleEvent(_id)}
      className="relative rounded-3xl overflow-hidden cursor-pointer group"
    >
      <div className="transform  hover:scale-110 transition duration-450">
        <img src={`data:image/jpeg;base64,${image}`} alt="" />
      </div>
      <div className="absolute bottom-0 w-full bg-green-200 text-center h-1/4 flex justify-center items-center">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Event;
