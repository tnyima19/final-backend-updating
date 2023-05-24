const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  priority: {
    type: Sequelize.STRING
  },

  isComplete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
   },
   employeeId:{
    type: Sequelize.INTEGER
   }
});

module.exports = Task;
