import mongoose from "mongoose";
const Schema = mongoose.Schema;
const StadiumSchema = new Schema({
  id: String,
  name: String,
  image: String,
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
