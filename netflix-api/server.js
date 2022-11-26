const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.use(express.static(path.join(__dirname, "/netflix-ui/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/netflix-ui/build", "index.html"));
})

app.listen(process.env.PORT||5000, () => {
  console.log("server started on port 5000");
});