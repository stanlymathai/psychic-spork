const { v4: uuidv4 } = require('uuid');

const authServices = require('../services/auth.service');
const responseHandlers = require('../utils/responseHandlers.util');

function register(req, res) {
  const payload = req.body;
  try {
    responseHandlers.sendSuccessResponse(res, payload);
  } catch (error) {
    responseHandlers.sendInternalServerError(res, error);
  }
}

function deactivate(req, res) {
  const userId = req.body;
  try {
    const response = authServices.disable(userId);
    responseHandlers.sendSuccessResponse(res, response);
  } catch (error) {
    responseHandlers.sendInternalServerError(res, error);
  }
}

module.exports = {
  register,
  deactivate,
};
