var expressJwt = require("express-jwt");
var { ErrorType, HandledError } = require("../errors/error.model");

const ERROR_MESSAGE = "You do not have permission to access this resource.";

module.exports = app => {
  app.use(
    expressJwt({ secret: process.env.JWT_SECRET }).unless({
      path: ["/swagger.json", "/exampleerror", "/health", "/auth/authenticate"]
    })
  );

  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      next(new HandledError(ErrorType.SECURITY, ERROR_MESSAGE, err));
    }
  });
};
