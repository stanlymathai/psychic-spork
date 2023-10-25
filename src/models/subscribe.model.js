const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema(
  {
    subscribeBy: {
      type: String,
      required: [true, "Please add a subscribeBy"],
    },
    CollectivesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collectives",
      required: [true, "Please add a CollectiveId"],
    },
    status: {
      type: Boolean,
      required: [true, "Please add a status"],
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Subscribe", subscribeSchema);
