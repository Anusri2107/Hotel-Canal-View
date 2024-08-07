import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";

function Room() {

  const [room, setRoom] = useState([]);

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await axios.get("https://hotel-canal-view-6.onrender.com/room");
        console.log(res.data);
        setRoom(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, []);

  return (
    <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5 my-10 flex flex-wrap items-center justify-evenly">
      {room?.map((item) => (
        <RoomCard key={item} item={item} />
      ))}
    </div>
  );
}

export default Room;
