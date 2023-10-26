const ERROR_MESSAGES = require("../utils/errorMessage.util");
const Subscribe = require("../models/subscribe.model");

async function createSubscribeRequest(payload) {
  try {
    const subscribeData = {
      subscribeUserId: payload.subscribeBy,
      collectivesId: payload.collectivesId,
    };

    const result = await Subscribe.create(subscribeData);

    return { subscribeId: result._id };
  } catch (error) {
    console.error("Error in createCollective:", error);
    throw error;
  }
}

module.exports = {
  createSubscribeRequest,
};
