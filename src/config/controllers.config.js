var fs = require("fs");

module.exports = app => {
  const files = fs.readdirSync(`${__dirname}/../controllers`);

  files.forEach(fileName => {
    console.info(`>> Controller Found: ${fileName}`);
    app.use(require(`${__dirname}/../controllers/${fileName}`));
  });
};
