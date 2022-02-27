module.exports = (app) => {
  //require a task controller js
  const taskController = require("../controllers/task.controller");
  const router = require("express").Router();

  //Create a new Task
  router.post("/", taskController.create);

  app.use("/api/tasks/", router);
};
