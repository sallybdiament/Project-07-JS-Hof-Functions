const data = require('../data/zoo_data');

// const expected = [
//   {
//     id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     fullName: 'Nigel Nelson',
//     species: ['lions', 'tigers'],
//     locations: ['NE', 'NW'],
//   },
//   {
//     id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
//     fullName: 'Burl Bethea',
//     species: ['lions', 'tigers', 'bears', 'penguins'],
//     locations: ['NE', 'NW', 'NW', 'SE'],
//   },
//   {
//     id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
//     fullName: 'Ola Orloff',
//     species: ['otters', 'frogs', 'snakes', 'elephants'],
//     locations: ['SE', 'SW', 'SW', 'NW'],
//   },
//   {
//     id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//     fullName: 'Wilburn Wishart',
//     species: ['snakes', 'elephants'],
//     locations: ['SW', 'NW'],
//   },
//   {
//     id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
//     fullName: 'Stephanie Strauss',
//     species: ['otters', 'giraffes'],
//     locations: ['SE', 'NE'],
//   },
//   {
//     id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//     fullName: 'Sharonda Spry',
//     species: ['otters', 'frogs'],
//     locations: ['SE', 'SW'],
//   },
//   {
//     id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
//     fullName: 'Ardith Azevado',
//     species: ['tigers', 'bears'],
//     locations: ['NW', 'NW'],
//   },
//   {
//     id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
//     fullName: 'Emery Elser',
//     species: ['lions', 'bears', 'elephants'],
//     locations: ['NE', 'NW', 'NW'],
//   },
// ];

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
