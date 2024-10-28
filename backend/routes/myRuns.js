const { addRuns, getRuns, deleteRun } = require('../controllers/run');

const router = require('express').Router();

router.post('/add-runs', addRuns)
      .get('/get-runs',getRuns)
      .delete('/delete-run/:id', deleteRun)

module.exports = router;