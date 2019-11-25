const task = require('../../models/task');
const controller = {};
controller.create = (req, res) => {
  const task = req.bodytask,
        details = req.body.details,
        image = req.body.image,
        iscompleted = req.body.iscompleted;
  task
    .create(task, details, image, iscompleted)
    .then(data => res.json(data))
    .catch(err => console.log('BACKEND ERROR:', err));
};

module.exports = controller;