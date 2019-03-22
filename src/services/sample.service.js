var { SampleModel } = require("../models/sample.model");

const service = {};

// ==================================================

service.list = callback => {
  callback([], 200);
};

service.read = (recordId, callback) => {
  callback({}, 200);
};

service.create = (model, callback) => {
  callback({}, 200);
};

service.update = (recordId, model, callback) => {
  callback({}, 200);
};

service.delete = (recordId, callback) => {
  callback({}, 200);
};

// ==================================================

module.exports = service;
