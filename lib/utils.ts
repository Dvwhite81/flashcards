import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { COLORS, DIRECTIONS } from './data';
import { Direction, Operator, Problem } from '../lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomColor = (): string => {
  const random = Math.floor(Math.random() * COLORS.length);
  return COLORS[random];
};

export const getRandomNumber = (): number => {
  const random = Math.floor(Math.random() * 13);
  return random;
};

export const getRandomDirection = (): Direction => {
  const random = Math.floor(Math.random() * DIRECTIONS.length);
  return DIRECTIONS[random];
};

export const getMultiplicationProblem = (): Problem => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = Operator.TIMES;
  const direction = getRandomDirection();
  const answer = firstNum * secondNum;

  return {
    firstNum,
    secondNum,
    operator,
    direction,
    answer,
  };
};

export const getDivisionProblem = (): Problem => {
  const secondNum = getRandomNumber();
  const answer = getRandomNumber();
  const firstNum = secondNum * answer;
  const operator = Operator.DIVIDED_BY;
  const direction = getRandomDirection();

  return {
    firstNum,
    secondNum,
    operator,
    direction,
    answer,
  };
};

const PROBLEM_OPTIONS = [getMultiplicationProblem(), getDivisionProblem()];

export const getProblem = () => {
  const random = Math.floor(Math.random() * PROBLEM_OPTIONS.length);
  return PROBLEM_OPTIONS[random];
};
