import generateRandomNumber from '../utils.js';
import createGame from '../index.js';

const description = 'What number is missing in the progression?';

const createGameData = () => {
  const progression = [];
  const progressionLength = generateRandomNumber(5, 10);
  const start = generateRandomNumber(1, 100);
  const step = generateRandomNumber(1, 20);
  const hidden = generateRandomNumber(0, progressionLength - 1);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hidden) {
      progression.push('..');
    } else {
      progression.push(String(start + i * step));
    }
  }

  const question = progression.join(' ');
  const correctAnswer = String(start + hidden * step);

  return [question, correctAnswer];
};

export default () => createGame(createGameData, description);
