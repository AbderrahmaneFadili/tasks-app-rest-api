const db = require("./db");

//contructor
const Task = function (title, completed) {
  this.title = title;
  this.completed = completed;
};

//Create
Task.create = (newTask, result) => {
  db.query("INSERT INTO tasks SET ?", newTask, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    }
    result(null, { ...newTask });
  });
};

//Find by id
Task.findById = () => {};

//Get all
Task.getAll = () => {};

//Update by id
Task.updateById = () => {};

//Remove task
Task.remove = () => {};

//Remove all tasks
Task.removeAll = () => {};

module.exports = Task;