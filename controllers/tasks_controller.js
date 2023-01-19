const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-error");

// Get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({tasks, amount:tasks.length})
  // res
  //   .status(200)
  //   .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

// create new task
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  // console.log({ task });
  res.status(201).json({ task });
});

// get single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  // console.log(id);
  let { id: taskID } = req.params;

  const task = await Task.findById({ _id: taskID });
  if (!task) {
    // const error = new Error("Not found");
    // error.status = 404;
    // return next(error);
    return next(createCustomError(`No task with id : ${taskID}`, 404));
    // return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }
  res.status(200).json({ task });
});

// delete task
const deleteTask = asyncWrapper(async (req, res) => {
  let { id: taskID } = req.params;

  const singleTask = await Task.findOneAndDelete({ _id: taskID });
  if (!singleTask) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ singleTask });
});

// update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
