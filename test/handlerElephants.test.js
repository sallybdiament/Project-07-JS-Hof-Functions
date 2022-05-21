const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso não receba nenhum parâmetro, é necessário retornar undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('recebendo como parâmetro "count", retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('recebendo como parâmetro "location", retorna a localização de elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  });
  it('recebendo como parâmetro "availability", não contém "Monday"', () => {
    const actual = handlerElephants('availability');
    const expected = 'Monday';
    expect(actual).not.toContain(expected);
  });
  it('recebendo como parâmetro "names", contém "Jefferson"', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });
  it('recebendo como parâmetro "averageAge", retorna um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('recebendo como parâmetro "popularity", retorna um número maior que 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 4;
    expect(actual).toBeGreaterThan(expected);
  });
  it('recebendo como parâmetro um número, retorna um aviso que o parametro deve ser uma string', () => {
    const actual = handlerElephants(5);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('testa a funçao , retorna um aviso que o parametro deve ser uma string', () => {
    const actual = handlerElephants('x');
    const expected = null;
    expect(actual).toBe(expected);
  });
});
