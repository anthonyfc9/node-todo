const db = require('../db');

const task = {};

task.findAll = () => {
    return db.manyOrNone('SELECT * FROM task');
  };

  task.create = (task, details, image, iscompleted) => {
    return db.one(
      'INSERT INTO task (task, details, image, iscompleted) values ($1, $2, $3, $4) returning id',
      [task, details, image, iscompleted]
    );
  };
  
  task.findById = (id) => {
    return db.one(
      'SELECT * FROM task WHERE id=$1',
      [id]
    );
  };

  task.delete=(id)=>{
    return db.none(
      'DELETE FROM task WHERE id = $1',
      [id]
    );
  }


module.exports = task;