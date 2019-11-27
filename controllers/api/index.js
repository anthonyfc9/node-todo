const router = require('express').Router();

const controller = require('./controller');

router.post('/task', controller.create);
router.delete('/task/:id', controller.delete);

module.exports = router;