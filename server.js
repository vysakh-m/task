const express    = require("express");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const app        = express();

//Body-Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//MongoDB Authentication

const uri = require("./config/keys").mongo;
mongoose.connect(uri, {
  dbName: "papa-fit",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// //Importing Routes
// app.use("/user", require("./routes/user"));


const port=4000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});