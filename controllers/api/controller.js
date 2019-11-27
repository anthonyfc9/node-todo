const Task = require('../../models/task');
const controller = {};
controller.create = (req, res) => {
  const task = req.body.task,
        details = req.body.details,
        image = req.body.image,
        iscompleted = req.body.iscompleted;
        Task
    .create(task, details, image, iscompleted)
    .then(data => res.json(data))
    .catch(err => console.log('BACKEND ERROR:', err));
};
controller.delete = (req, res) =>{
  const id = req.body.id;

  Task
  .delete(id)
  .then(data => res.json(data))
  .catch(err => console.log('delete errror:',err));
};
module.exports = controller;