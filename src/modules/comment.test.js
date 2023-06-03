import getComments from './comment.js';

describe('Comments Functionality', () => {
  test('Count number of comments', () => {
    const myObject = [{
      0: 'First',
      1: 'Second',
      2: 'Third',
      3: 'Fourth',
    }];
    const newCount = getComments(myObject);
    expect(newCount).toBe(1);
  });

  test('Count number of comments', () => {
    const myObject = [5, 8, 25, 3];
    const newCount = getComments(myObject);
    expect(newCount).toBe(4);
  });
});