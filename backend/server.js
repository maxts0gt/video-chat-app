const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// bringing in auth routes
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// regsiter the routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app);

// connecting to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening on server
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed. Server not started");
    console.log(`This is the ERROR: ${err}`);
  });
