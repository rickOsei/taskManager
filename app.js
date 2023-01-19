const express = require("express");
const server = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/error-handler");

// midddlewares
server.use(express.static("./public"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Routes
server.use("/api/v1/tasks", tasks);
// Handle request not found
server.use(notFound);

// Error handler middleware
server.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    server.listen(port, () => console.log("Server is running successfully"));
  } catch (error) {
    console.log(error);
  }
};

start();

// server.get("api/v1/tasks") - get all the tasks
// server.post("api/v1/tasks") - create a new task
// server.get("api/v1/tasks/:id") - get a single task
// server.patch("api/v1/tasks/:id") - update task
// server.delete("api/v1/tasks/:id") -delete task
