import Subscribe from "../models/subscribe.model.js";

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const subscribedEmail = await Subscribe.findOne({ email });
    if (subscribedEmail) {
      return res.status(400).json({ message: "Email already subsribed." });
    }
    const newEmail = new Subscribe({
      email,
    });
    await newEmail.save();
    res.status(200).json({ message: "Email subscribed successfully." });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
