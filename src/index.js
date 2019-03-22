var express = require("express"),
  app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

require("colors");

require("./config/express.config")(app);
require("./config/swagger.config")(app);
require("./config/logging.config")(app);
require("./config/auth.config")(app);
require("./config/controllers.config")(app);
require("./config/error.config")(app);

app.listen(process.env.PORT, () => {
  console.log(">> Service is running.");
});
