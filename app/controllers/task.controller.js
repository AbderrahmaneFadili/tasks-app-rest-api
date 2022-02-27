const Task = require("../models/task.model");

//Create a Save a new Task
exports.create = (req, res) => {
  //Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
  }
  //Create a task
  const task = new Task(req.body.title, req.body.completed);

  //Save Tutorial in the database
  Task.create(task, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Task.",
      });
    } else {
      res.send(data);
    }
  });
};
