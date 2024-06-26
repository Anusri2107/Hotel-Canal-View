import Room from "../models/room.model.js";

export const getRoom = async (req, res) => {
  try {
    const room = await Room.find();
    res.status(200).json(room);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
