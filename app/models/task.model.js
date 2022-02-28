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
      console.log("Error :", err);
      result(err, null);
      return;
    }
    result(null, { ...newTask });
    return;
  });
};

//Find by id
Task.findById = (id, result) => {
  db.query(`SELECT * FROM tasks WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("Error :", err);
      result(err, result);
      return;
    }

    if (res.length) {
      console.log("Found task :", res[0]);
      result(null, res[0]);
      return;
    }

    result({ message: "not_found" }, null);
  });
};

//Get all
Task.getAll = (title, result) => {
  let query = "SELECT * FROM tasks";
  if (title) {
    query.concat(` WHERE title LIKE '%${title}%'`);
  }
  db.query(query, (err, res) => {
    if (err) {
      console.log(error);
      result(err, null);
      return;
    } else {
      result(null, res);
      return;
    }
  });
};

//Update by id
Task.updateById = () => {};

//Remove task
Task.remove = () => {};

//Remove all tasks
Task.removeAll = () => {};

module.exports = Task;
