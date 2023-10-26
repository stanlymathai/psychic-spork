const followerService = require("../services/followers.service");
const responseHandler = require("../utils/responseHandlers.util");

async function createFollowRequest(req, res) {
  try {
    const payload = req.body;
    const collective = await followerService.createFollowingRequest(payload);
    responseHandler.sendSuccessResponse(res, collective);
  } catch (error) {
    return sendInternalServerError(res, error.message);
  }
}

module.exports = {
  createFollowRequest,
};
