const mongoose = require("mongoose");

const followerSchema = new mongoose.Schema(
  {
    followingUserId: {
      type: String,
      required: [true, "Please add a followingBy"],
    },
    collectivesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collectives",
      required: [true, "Please add a CollectiveId"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Follower", followerSchema);
