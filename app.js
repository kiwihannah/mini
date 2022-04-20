const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const app = express();
const router = express.Router();

// middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use("/api", bodyParser.json(), router);

app.listen(port, () => {
  console.log(`http://localhost:${port}/api/`);
});

// connect DB
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("mafia app DB connected");
  })
  .catch(console.error);

router.get("/", (_, res) => {
  res.send("MINI PROJ SERVER OPEN 2");
});

// routes
// const postRouter = require('./routes/post');
// const userRouter = require('./routes/user');
// app.use('/api', [postRouter, userRouter]);
