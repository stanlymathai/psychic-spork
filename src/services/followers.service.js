const ERROR_MESSAGES = require("../utils/errorMessage.util");
const Follower = require("../models/followers.model");

async function createFollowingRequest(payload) {
  try {
    const FollowerData = {
      followingUserId: payload.followingBy,
      collectivesId: payload.collectivesId,
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
