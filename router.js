const router = require('express').Router();



router.use('/task', require('./controllers/task'));

router.use('/api', require('./controllers/api'));

router.get('/', (req, res) => res.render('index'));



module.exports = router;