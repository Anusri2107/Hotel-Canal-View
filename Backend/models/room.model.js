import mongoose, { trusted } from "mongoose";

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  facilities: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
