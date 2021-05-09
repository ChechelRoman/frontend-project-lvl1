import generateRandomNumber from '../utils.js';
import createGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let x = num1;
  let y = num2;

  while (y !== 0) {
    y = x % (x = y);
  }

  return x;
};

const createGameData = () => {
  const num1 = generateRandomNumber(1, 200);
  const num2 = generateRandomNumber(1, 200);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => createGame(createGameData, description);
