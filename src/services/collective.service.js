const ERROR_MESSAGES = require("../utils/errorMessage.util");
const Collectives = require("../models/collectives.model");
const pushToS3 = require("../helpers/uploadToS3");

async function createCollective(payload, profileImages, bannerImages) {
  try {
    const preferenceData = {
      cryptoAsset: payload.cryptoAsset,
      subscribersRequerst: payload.subscribersRequerst,
      criteriaToJoin: payload.criteriaToJoin,
      displayFollowers: payload.displayFollowers,
      markAsFeatured: payload.markAsFeatured,
      banner: payload.banner,
      displayPriceChart: payload.displayPriceChart,
      displayBuyNow: payload.displayBuyNow,
      listedMoniTalksExchange: payload.listedMoniTalksExchange,
    };
    const profileImagesS3 = await Promise.all(
      profileImages.map(async (item, index) => {
        const s3Upload = await pushToS3({
          fileName: item.filename,
          filePath: item.path,
        });
        return s3Upload.upload;
      })
    );
    const bannerImagesS3 = await Promise.all(
      bannerImages.map(async (item, index) => {
        const s3Upload = await pushToS3({
          fileName: item.filename,
          filePath: item.path,
        });
        return s3Upload.upload;
      })
    );

    const profileImageData = {
      path: profileImagesS3[0],
      createdDate: Date.now(),
    };
    const bannerImagesData = {
      path: bannerImagesS3[0],
      createdDate: Date.now(),
    };
    const imageData = {
      profile: [profileImageData],
      banner: [bannerImagesData],
    };
    const collectiveData = {
      title: payload.title,
      image: imageData,
      descriptions: payload.descriptions,
      preference: preferenceData,
      tags: payload.tags,
      seoKewords: payload.seo_kewords,
      seoDescriptions: payload.seoDescriptions,
      createdBy: payload.createdBy,
    };

    const collectives = await Collectives.create(collectiveData);

    return { collectivesId: collectives._id };
  } catch (error) {
    console.error("Error in createCollective:", error);
    throw error;
  }
}

async function getCollectiveByAdminId(adminId) {
  try {
    const result = Collectives.find({ createdBy: adminId });
    return result;
  } catch (error) {
    console.error("Error in createCollective:", error);
    throw error;
  }
}

async function getAllCollectives() {
  try {
    const result = Collectives.find({}, "-prefrerance -createdBy");
    return result;
  } catch (error) {
    console.error("Error in createCollective:", error);
    throw error;
  }
}

async function getCollectiveByName(name) {
  return;
}

module.exports = {
  createCollective,
  getCollectiveByAdminId,
  getCollectiveByName,
  getAllCollectives,
};
