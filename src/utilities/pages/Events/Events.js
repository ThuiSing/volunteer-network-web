import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Events = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/volunteers/${user.email}`)
      .then((res) => {
        setEvents(res.data);
      })
      .finally(() => setLoading(false));
  }, [user]);

  //delete specific
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/volunteers/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        const exists = events.filter((event) => event._id !== id);
        setEvents(exists);
        alert("successfully deleted");
      }
    });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <img
            src="https://assets.materialup.com/uploads/497a3ff8-45b5-4a0b-84f5-542153c586db/preview.gif"
            alt="loader"
          />
        </div>
      ) : (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-16 px-2 md:px-0">
          {events.map((event) => (
            <div
              key={event._id}
              className="flex relative  items-center border rounded-xl overflow-hidden"
            >
              {/* {console.log(event)} */}
              <div className="w-1/2 mr-10 ">
                {event.image ? (
                  <img src={`data:image/jpeg;base64,${event.image}`} alt="" />
                ) : (
                  <img
                    src="https://static.thenounproject.com/png/3322919-200.png"
                    alt=""
                  />
                )}
              </div>
              <div className="w-2/3">
                <h2 className="text-2xl">{event.title}</h2>
                <h2 className="text-xl text-blue-400">{event.date}</h2>
                <h2 className="text-gray-600">{event.description}</h2>
                <button
                  onClick={() => handleDelete(event._id)}
                  className=" px-5 md:absolute bottom-3 right-5 py-2 bg-blue-400 text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Events;
