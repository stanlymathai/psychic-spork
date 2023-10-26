const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema(
  {
    subscribeUserId: {
      type: String,
      required: [true, "Please add a subscribeBy"],
    },
    collectivesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collectives",
      required: [true, "Please add a CollectiveId"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "BLOCKED", "PENDING"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Subscribe", subscribeSchema);
