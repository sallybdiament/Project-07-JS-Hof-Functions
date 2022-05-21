const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem parâmetros, retorna todos dias e horários', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo como parâmetros Monday e 09:00-AM, retorna que o zoo está fechado', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo como parâmetros Wednesday e 09:00-PM, retorna que o zoo está fechado', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo como parâmetros Tuesday e 09:00-AM, retorna que o zoo está aberto', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo como parâmetros Thu e 09:00-AM, deve lançar uma exceção com uma mensagem', () => {
    const expected = 'The day must be valid. Example: Monday';
    const actual = () => getOpeningHours('Thu', '09:00-AM');
    expect(actual).toThrowError(expected);
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com uma mensagem', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    const actual = () => getOpeningHours('Friday', '09:00-ZM');
    expect(actual).toThrowError(expected);
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com uma mensagem', () => {
    const expected = 'The hour should represent a number';
    const actual = () => getOpeningHours('Saturday', 'C9:00-AM');
    expect(actual).toThrowError(expected);
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com uma mensagem', () => {
    const expected = 'The minutes should represent a number';
    const actual = () => getOpeningHours('Sunday', '09:c0-AM');
    expect(actual).toThrowError(expected);
  });
});
