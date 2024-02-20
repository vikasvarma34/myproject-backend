const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectToDatabase = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

connectToDatabase();

const app = express();
const PORT = process.env.PORT || process.argv[2] || 8080;

const routes = require("./routes");

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.use(routes);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
