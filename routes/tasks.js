const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks_controller");

// router.get("/", getAllTasks);
// router.post("/", createTask);
// router.get("/:id", getSingleTask);
// router.patch("/:id", updateTask);
// router.delete("/:id", deleteTask);

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
