import React, { useState } from "react";
import icon1 from "../../images/logos/users-alt 1.png";
import icon2 from "../../images/logos/plus 1.png";
import ShowList from "./ShowList/ShowList";
import AddEvent from "./AddEvent/AddEvent";

const RegisteredList = () => {
  const [showlist, setShowList] = useState(true);
  const [showAddEvent, setAddEvent] = useState(false);
  const handleVolunteer = () => {
    setAddEvent(false);
    setShowList(true);
  };
  const addEvent = () => {
    setAddEvent(true);
    setShowList(false);
  };
  return (
    <div className="container mx-auto grid grid-cols-4 bg-gray-100 min-h-screen">
      <div className="bg-white pt-8">
        <button
          onClick={handleVolunteer}
          className="block flex items-center p-3"
        >
          <img width="25" src={icon1} alt="list icon" />
          <h3 className="ml-3 font-medium">Volunteer register list</h3>
        </button>
        <button onClick={addEvent} className="block flex p-3">
          <img width="25" src={icon2} alt="list icon" />
          <h3 className="ml-3  font-medium">Add event</h3>
        </button>
      </div>
      <div className=" bg-white col-span-3 m-5 rounded-2xl p-6">
        {showlist && <ShowList />}
        {showAddEvent && <AddEvent />}
      </div>
    </div>
  );
};

export default RegisteredList;
<h1>Hello</h1>;
