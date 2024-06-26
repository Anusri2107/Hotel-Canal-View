import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";

function Room() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await axios.get("http://localhost:4001/room");
        console.log(res.data);
        setRoom(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, []);

  return (
    <div className="px-5 py-3 xl:px-20 xl:py-5 my-10">
      {room?.map((item) => (
        <RoomCard key={item} item={item} />
      ))}
    </div>
  );
}

export default Room;
