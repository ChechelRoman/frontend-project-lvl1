import generateRandomNumber from '../utils.js';
import createGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const createGameData = () => {
  const num = generateRandomNumber(-1000, 1000);
  const question = String(num);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => createGame(createGameData, description);
