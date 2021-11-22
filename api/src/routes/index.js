const router  = require('express').Router();
const dogRoute  = require('./dogs')
const temperamentRoute  = require('./temperaments')

router.use('/dogs', dogRoute)
router.use('/temperaments', temperamentRoute)



module.exports = router;
