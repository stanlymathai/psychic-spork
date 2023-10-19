const userService = require('../services/user.service');
const responseHandler = require('../utils/responseHandlers.util');

async function updateUser(req, res) {
  const payload = req.body;

  try {
    const user = await userService.updateUser(payload);

    responseHandler.sendSuccessResponse(res, user);
  } catch (error) {
    responseHandler.sendInternalServerError(res, error);
  }
}
module.exports = {
  updateUser,
};
