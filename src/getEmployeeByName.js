const data = require('../data/zoo_data');

const result = {};
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return result;
  }
  return data.employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
}

// console.log(getEmployeeByName());
// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
