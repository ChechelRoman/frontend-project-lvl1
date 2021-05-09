import generateRandomNumber from '../utils.js';
import createGame from '../index.js';

const calculate = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('wrong operand');
  }
};

const description = 'What is the result of the expression?';

const createGameData = () => {
  const num1 = generateRandomNumber(0, 20);
  const num2 = generateRandomNumber(0, 20);
  const operands = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operands.length - 1);
  const question = `${num1} ${operands[randomIndex]} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operands[randomIndex]));

  return [question, correctAnswer];
};

export default () => createGame(createGameData, description);
