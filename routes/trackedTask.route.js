const express = require("express");
const router = express.Router();
const {
  getTrackedTasks,
  postTrackedTask,
  updateTrackedTask,
  deleteTrackedTask,
} = require("../controllers/trackedTask.controller");

router.get("/", getTrackedTasks);
router.post("/", postTrackedTask);
router.put("/:id", updateTrackedTask);
router.delete("/:id", deleteTrackedTask);

module.exports = router;
