const data = require('../data/zoo_data');

function getEmployee(parametro) {
  if (typeof parametro === 'object') {
    const param = Object.values(parametro)[0];
    // eslint-disable-next-line arrow-body-style
    const pessoa = data.employees.filter((empl) => {
      return empl.firstName === param || empl.lastName === param || empl.id === param;
    });
    return pessoa;
  }
}

function getId(parametro) {
  const pessoa = getEmployee(parametro);
  return pessoa[0].id;
}

function getFullName(parametro) {
  const pessoa = getEmployee(parametro);
  return `${pessoa[0].firstName} ${pessoa[0].lastName}`;
}

function getSpecies(parametro) {
  const pessoa = getEmployee(parametro);
  const idAnimals = pessoa[0].responsibleFor;
  const animaisDoEmployee = data.species.filter((specie) => idAnimals.includes(specie.id));
  return animaisDoEmployee.map((animal) => animal.name);
}

function getLocation(parametro) {
  const pessoa = getEmployee(parametro);
  const idAnimals = pessoa[0].responsibleFor;
  const animaisDoEmployee = data.species.filter((specie) => idAnimals.includes(specie.id));
  return animaisDoEmployee.map((animal) => animal.location);
}

function retorno(parametro) {
  const resultado = {
    id: getId(parametro),
    fullName: getFullName(parametro),
    species: getSpecies(parametro),
    locations: getLocation(parametro),
  };
  return resultado;
}

function getAll() {
  const namesOfEmployees = data.employees.map((employee) => ({ name: employee.firstName }));
  const cadaNome = namesOfEmployees.map((name) => retorno(name));
  return cadaNome;
}

function getEmployeesCoverage(parametro = 'todos') {
  if (parametro === 'todos') {
    return getAll();
  }
  const valorObjParam = Object.values(parametro)[0];
  const verifyId = data.employees.some((employee) => employee.id === valorObjParam);
  const verifyName = data.employees.some((employee) => employee.firstName === valorObjParam);
  const verifyLastName = data.employees.some((employee) => employee.lastName === valorObjParam);
  if (verifyName === true || verifyId === true || verifyLastName === true) {
    return retorno(parametro);
  }
  throw new Error('Informações inválidas');
}

// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
