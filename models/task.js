const db = require('../db');

const task = {};

task.findAll = () => {
    return db.manyOrNone('SELECT * FROM task');
  };
  
  task.findById = (id) => {
    return db.one(
      'SELECT * FROM task WHERE id=$1',
      [id]
    );
  };


module.exports = task;