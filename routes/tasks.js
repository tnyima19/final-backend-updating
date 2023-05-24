const express = require('express');
const router = express.Router();
const { Employee, Task } = require("../database/models");

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require("express-async-handler");

/** GET ALL COURSES: then/catch */
// router.get('/', function(req, res, next) {
//   Course.findAll({include: [Employee]})
//     .then(tasks => res.status(200).json(tasks))
//     .catch(err => next(err));
// });
/** GET ALL tasks: express-async-handler (ash) */
// automatically catches any error and sends to middleware
// same as using try/catch and calling next(error)
router.get("/", ash(async (req, res) => {
    let tasks = await Task.findAll({ include: [Employee] });
    res.status(200).json(tasks);
  })
);



/******************* EDIT *********************/

router.put(
  "/:id",
  ash(async (req, res) => {
    await Task.update(req.body, { where: { id: req.params.id } });
    let task = await Task.findByPk(req.params.id);
    res.status(201).json(task);
  })
);

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
