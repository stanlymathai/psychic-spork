const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema(
  {
    followingBy: {
      type: String,
      required: [true, "Please add a followingBy"],
    },
    CollectivesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collectives",
      required: [true, "Please add a CollectiveId"],
    },
    status: {
      type: Boolean,
      required: [true, "Please add a status"],
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Follower", followerSchema);
