const {
  default_router
} = require("./Routes/default.routes");
const {
  movie_router
} = require("./Routes/movie.routes");
const {
  frequency_router
} = require("./Routes/frequency.routes");
var bodyparser = require("body-parser");
const mongoose = require("mongoose");

const express = require("express");
const {
  query_router
} = require("./Routes/query.routes");

const PORT = 9999;
const exp = express();
exp.use(express.json());
exp.use(express.urlencoded({
  extended: true
}));
exp.use(bodyparser.json());



mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv:// vercel-admin-user:${process.env.MONGO_DB_PASSWORD}@cluster0.01lnzaz.mongodb.net/MovieQueryDatabase?retryWrites=true&w=majority`
);



/* const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
}); */



exp.use("/", default_router);
exp.use("/", movie_router);
exp.use("/", frequency_router);
exp.use("/", query_router);

exp.listen(PORT, () => {
  console.log(`express app listening to port #${PORT}`);
  console.log("hello world");
});