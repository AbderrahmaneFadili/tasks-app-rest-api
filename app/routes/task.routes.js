module.exports = (app) => {
  //require a task controller js
  const taskController = require("../controllers/task.controller");
  const router = require("express").Router();

  //Create a new Task
  router.post("/", taskController.create);
  //Get all tasks
  router.get("/", taskController.getAll);
  //Find by id
  router.get("/:id", taskController.findById);
  //Delete by id
  router.delete("/:id", taskController.deleteById);
  //Delete all
  router.delete("/", taskController.deleteAll);

  app.use("/api/tasks/", router);
};
