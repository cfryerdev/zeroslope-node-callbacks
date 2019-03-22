var jwt = require("jsonwebtoken");

const service = {};
const expireMin = 60;
const { JWT_SECRET, JWT_ISSUER } = process.env;

// ==================================================

service.generate = (data, callback) => {
  const current = Math.floor(Date.now() / 1000);

  // TODO: Validate against the request body using a client id
  //       or a username and password, whatever.

  callback(
    {
      type: "Bearer",
      token: jwt.sign(
        {
          data: {}, // Data to store
          algorithm: "HS256", // Algorithm
          expiresIn: current + expireMin * 60, // Expires
          issuer: JWT_ISSUER // Issuer
        },
        JWT_SECRET
      )
    },
    200
  );
};

// =================================================

module.exports = service;
