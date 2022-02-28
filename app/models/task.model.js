const db = require("./db");

//contructor
const Task = function (task) {
  this.title = task.title;
  this.completed = task.completed;
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
  let query = `SELECT * FROM tasks`;
  if (title) {
    query += ` WHERE title LIKE '%${title}%';`;
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

//Remove task
Task.remove = (id, result) => {
  db.query(`DELETE FROM tasks WHERE id = ?`, id, (err, res) => {
    //check is the erro not null
    if (err) {
      console.log("Error : ", err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      //not task found with the id
      result({ message: "not_found" }, null);
      return;
    } else {
      result(null, {
        message: `task ${id} deleted `,
        affectedRows: res.affectedRows,
      });
    }
  });
};

//Remove all tasks
Task.removeAll = (result) => {
  db.query(`TRUNCATE TABLE tasks`, (err, res) => {
    if (err) {
      console.log("Error :", err);
      result(err, null);
      return;
    }

    result(null, {
      results: `all tasks deleted`,
    });
  });
};

//Update one
Task.updateOne = (id, task, result) => {
  db.query(
    `UPDATE tasks SET title = ?  , completed = ? WHERE id = ?`,
    [task.title, task.completed, id],
    (err, res) => {
      if (err) {
        console.log("Error : ", err);
        result(err, null);
      }

      if (res.affectedRows === 0) {
        result(
          {
            message: "not_found",
          },
          null,
        );
      } else {
        result(null, {
          message: `Task ${id} updated`,
        });
      }
    },
  );
};

module.exports = Task;
