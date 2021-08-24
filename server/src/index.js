const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
const { PORT } = process.env;
var app = express();

//DB
const db = require("./models");

//middlewares
app.use(cors());
app.use(express.json());

//Router config
routes(app);

// Sync DB Connection
db.sync({ alter: true })
  .then(() => {
    console.log(`Database connected...`);
    app.listen(PORT, () => {
      console.log(`listening on port: ${PORT}`);
    });
  })
  .catch((error) => console.log("Error while connecting to DB:" + error));
