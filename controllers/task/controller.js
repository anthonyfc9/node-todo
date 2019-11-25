
const task = require('../../models/task');

const controller = {};

controller.index = (req, res) => {
  task
    .findAll()
    .then((data) => {
      res.render('task/index', {task: data});
    })
    .catch(err => console.log('ERROR:', err));
};


controller.show = (req, res) => {
  const id = req.params.id;
  task
    .findById(id)
    .then((data) => {
      res.render('task/show',data);
    })
    .catch(err => console.log('ERROR:', err));
};

module.exports = controller;