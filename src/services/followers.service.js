const ERROR_MESSAGES = require("../utils/errorMessage.util");
const Follower = require("../models/followers.model");

async function createFollowingRequest(payload) {
  try {
    const FollowerData = {
      followingBy: payload.followingBy,
      CollectivesId: payload.CollectivesId,
    };

    const result = await Follower.create(FollowerData);

    return { FollowersId: result._id };
  } catch (error) {
    console.error("Error in createCollective:", error);
    throw error;
  }
}

module.exports = {
  createFollowingRequest,
};
