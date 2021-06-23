import Stadium from "../models/stadium.js";

export const getStadiums = async (req, res) => {
  try {
    const stadium = await Stadium.find();

    res.status(200).json(stadium);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStadium = async (req, res) => {
  const stadium = req.body;
  const newStadium = new Stadium(stadium);
  try {
    await newStadium.save();
    res.status(201).json(newStadium);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getAllBooking = async (req, res) => {
  let foundStadium = await Stadium.findById({ name: req.params.id }).populate(
    "booking"
  );
  res.json(foundStadium);
};
