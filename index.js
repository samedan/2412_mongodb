const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware json
app.use(express.json());
// middleware add Formproduct
app.use(express.urlencoded({ extended: false }));

// mongoose
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000 here");
    });
  })
  .catch(() => {
    console.log("error connecting");
  });

app.get("/", (req, res) => {
  res.send("hello node");
});

// products route
app.use("/api/products", productRoute);
