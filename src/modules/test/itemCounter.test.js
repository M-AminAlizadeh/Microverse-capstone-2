const { itemsCounter } = require('./itemCounter.js');

describe('Testing number of items', () => {
  const threeEl = document.createElement('div');
  threeEl.innerHTML = '<div></div><div></div><div></div>';

  const fourEl = document.createElement('div');
  fourEl.innerHTML = '<div></div>'
              + '<div></div>'
              + '<div></div>'
              + '<div></div>';

  const fiveEl = document.createElement('div');
  fiveEl.innerHTML = '<div></div>'
                        + '<div></div>'
                        + '<div></div>'
                        + '<div></div>'
                        + '<div></div>';

  const sixEl = document.createElement('div');
  sixEl.innerHTML = '<div></div><div></div><div></div><div></div><div></div><div></div>';

  test('One elements should count 1', () => {
    expect(itemsCounter(threeEl)).toEqual(3);
  });

  test('One elements should count 1', () => {
    expect(itemsCounter(fourEl)).toEqual(4);
  });

  test('Two elements should count 2', () => {
    expect(itemsCounter(fiveEl)).toBe(5);
  });

  test('Six elements should count 6', () => {
    expect(itemsCounter(sixEl)).toBe(6);
  });
});