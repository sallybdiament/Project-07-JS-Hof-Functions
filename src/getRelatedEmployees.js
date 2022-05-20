const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// console.log(isManager(stephanieId));
// console.log(isManager(olaId));
// console.log(isManager(burlId));

function getRelatedEmployees(managerId) {
  const result = isManager(managerId);
  console.log(result);
  if (result === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const objGerenciados = data.employees.filter((employee) => employee.managers.includes(managerId));
  return objGerenciados.map((gerenciado) => `${gerenciado.firstName} ${gerenciado.lastName}`);
}

getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
// const actual = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';
// console.log(getRelatedEmployees(actual));

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
