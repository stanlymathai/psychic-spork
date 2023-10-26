const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema(
  {
    subscribeUserId: {
      type: String,
      required: [true, "Please add a subscribeBy"],
    },
    CollectivesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collectives",
      required: [true, "Please add a CollectiveId"],
    },
    status: {
      type: String,
      enum: ["APPROVE", "DISAPPROVE"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Subscribe", subscribeSchema);
