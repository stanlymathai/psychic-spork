const mongoose = require("mongoose");

const CollectiveSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
    },
    image: {
      profile: [
        {
          path: {
            type: String,
            default: "",
          },
          createdDate: {
            type: String,
            default: "",
          },
        },
      ],
      banner: [
        {
          path: {
            type: String,
            default: "",
          },
          createdDate: {
            type: String,
            default: "",
          },
        },
      ],
    },
    descriptions: {
      type: String,
      required: [true, "Please add a description"],
    },
    prefrerance: {
      cryptoAsset: {
        type: Boolean,
        default: false,
      },
      subscribersRequest: {
        type: Boolean,
        default: false,
      },
      criteriaToJoin: {
        type: Boolean,
        default: false,
      },
      displayFollowers: {
        type: Boolean,
        default: false,
      },
      markAsFeatured: {
        type: Boolean,
        default: false,
      },
      banner: {
        type: Boolean,
        default: false,
      },
      displayPriceChart: {
        type: Boolean,
        default: false,
      },
      displayBuyNow: {
        type: Boolean,
        default: false,
      },
      listedMoniTalksExchange: {
        type: Boolean,
        default: false,
      },
    },
    seoDescriptions: {
      type: String,
      required: [true, "Please add a description"],
    },
    tags: {
      type: [],
      required: [true, "Please add a tags"],
    },
    seoKewords: {
      type: [],
      required: [true, "Please add a seo kewords"],
    },
    createdBy: {
      type: String,
      required: [true, "Please add a createdBy"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Collectives", CollectiveSchema);
