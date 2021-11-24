import axios from "axios";
import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/events")
      .then((res) => setEvents(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-24">
          <img
            src="https://assets.materialup.com/uploads/497a3ff8-45b5-4a0b-84f5-542153c586db/preview.gif"
            alt="loader"
          />
        </div>
      ) : (
        <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-12">
          {events.map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
