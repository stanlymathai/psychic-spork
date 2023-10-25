const subscribeService = require("../services/subscribe.service");
const responseHandler = require("../utils/responseHandlers.util");

async function subscribeRequest(req, res) {
  try {
    const payload = req.body;
    const collective = await subscribeService.createSubscribeRequest(payload);
    responseHandler.sendSuccessResponse(res, collective);
  } catch (error) {
    return sendInternalServerError(res, error.message);
  }
}

module.exports = {
  subscribeRequest,
};
