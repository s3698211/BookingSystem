import mongoose from "mongoose";
const Schema = mongoose.Schema;
const StadiumSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  likeCount: {
    type: Number,
    default: 0,
  },
  calendar: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
});

const Stadium = mongoose.model("Stadium", StadiumSchema);
export default Stadium;
