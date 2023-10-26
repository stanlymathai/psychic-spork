const collectiveService = require("../services/collective.service");
const responseHandler = require("../utils/responseHandlers.util");

async function createCollective(req, res) {
  try {
    const payload = req.body;
    const profileImages = req.files["profileImages"];
    const bannerImages = req.files["bannerImages"];
    const collective = await collectiveService.createCollective(
      payload,
      profileImages,
      bannerImages
    );
    responseHandler.sendSuccessResponse(res, collective);
  } catch (error) {
    return sendInternalServerError(res, error.message);
  }
}

async function fetchCollectiveByAdmin(req, res) {
  try {
    const { userId } = req.query;
    const collective = await collectiveService.getCollectiveByAdminId(userId);
    responseHandler.sendSuccessResponse(res, collective);
  } catch (error) {
    return sendInternalServerError(res, error.message);
  }
}

async function fetchAllCollective(req, res) {
  try {
    const collective = await collectiveService.getAllCollectives();
    responseHandler.sendSuccessResponse(res, collective);
  } catch (error) {
    return sendInternalServerError(res, error.message);
  }
}

module.exports = {
  createCollective,
  fetchAllCollective,
  fetchCollectiveByAdmin,
};
