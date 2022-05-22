const data = require('../data/zoo_data');

function exhibition(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return 'The zoo will be closed!';
  }
  const animaisDia = data.species.filter((specie) => specie.availability.includes(scheduleTarget));
  return animaisDia.map((animal) => animal.name);
}

// console.log(exhibition('Tuesday'));

const arrayHours = Object.entries(data.hours);

function officeHour(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return 'CLOSED';
  }
  const arrayComDiaEHorario = arrayHours.filter((dia) => dia[0] === scheduleTarget);
  const horaAbre = arrayComDiaEHorario[0][1].open;
  const horaFecha = arrayComDiaEHorario[0][1].close;
  return `Open from ${horaAbre}am until ${horaFecha}pm`;
}

// console.log(officeHour('Saturday'));

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = data.species.map((specie) => specie.name);
const paramPossiveis = [...daysOfWeek, ...animals];
// console.log(paramPossiveis);

function paramExiste(scheduleTarget) {
  return paramPossiveis.some((element) => element === scheduleTarget);
}

function paramDia(scheduleTarget) {
  return daysOfWeek.some((element) => element === scheduleTarget);
}

// console.log(paramExiste('lions'));

function allDays() {
  return daysOfWeek.reduce((acc, day) => {
    acc[day] = {
      officeHour: officeHour(day),
      exhibition: exhibition(day),
    };
    return acc;
  }, {});
}

// console.log(allDays());

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || paramExiste(scheduleTarget) === false) {
    return allDays();
  }
  if (paramDia(scheduleTarget) === true) {
    const obj = { officeHour: officeHour(scheduleTarget), exhibition: exhibition(scheduleTarget) };
    const obj2 = {};
    obj2[scheduleTarget] = obj;
    return obj2;
  }
  const paramAnimal = data.species.find((specie) => scheduleTarget === specie.name);
  return paramAnimal.availability;
}

// console.log(getSchedule());

module.exports = getSchedule;
