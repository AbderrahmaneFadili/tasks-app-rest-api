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
  const task = new Task(req.body);

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

//Find task by id
exports.findById = (req, res) => {
  Task.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `Not found task with id : ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving Tutorial with id : ${req.params.id}`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

//Get All Tasks
exports.getAll = (req, res) => {
  const title = req.query.title;
  Task.getAll(title, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tasks",
      });
    } else {
      res.send(data);
    }
  });
};

//Delete Task by id
exports.deleteById = (req, res) => {
  const id = req.params.id;
  Task.remove(id, (err, data) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message: `Not found task with id : ${id}`,
        });
      }
    } else {
      res.send(data);
    }
  });
};

//Delete All
exports.deleteAll = (req, res) => {
  Task.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Some error occurred while removing all tasks.`,
      });
    } else {
      res.send({
        message: data.results,
      });
    }
  });
};

//Update by id
exports.updateById = (req, res) => {
  Task.updateOne(req.params.id, new Task(req.body), (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Some error occurred while updating the task.`,
      });
    } else {
      res.send(data);
    }
  });
};
