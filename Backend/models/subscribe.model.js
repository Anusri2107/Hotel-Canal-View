import mongoose from "mongoose";

const subscribeSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const Subscribe = mongoose.model("Subscribe", subscribeSchema);

export default Subscribe;
