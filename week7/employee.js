/* 
Title: Perry-exercise 7.4.js
Author: Erica Perry
Date:9/18/2020
Description: employee.js
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "exercise 7.4.js"));
console.log("\n") */


// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);
