import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BASE_PROBLEM, COLORS, DIRECTIONS } from './data';
import { Direction, Operator, Problem } from '../lib/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomColor = (): string => {
  const random = Math.floor(Math.random() * COLORS.length);
  return COLORS[random];
};

export const getRandomNumber = (): number => {
  console.log('getNumber:');
  const random = Math.floor(Math.random() * 13);
  return random;
};

export const getRandomDirection = (): Direction => {
  const random = Math.floor(Math.random() * DIRECTIONS.length);
  return DIRECTIONS[random];
};

export const getMultiplicationProblem = (): Problem => {
  console.log('getMultiplication');
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operator = Operator.TIMES;
  const direction = getRandomDirection();
  const answer = firstNum * secondNum;

  const question = {
    firstNum,
    secondNum,
    operator,
  };

  return {
    question,
    direction,
    answer,
  };
};

export const getDivisionProblem = (): Problem => {
  console.log('getDivision');
  const secondNum = getRandomNumber();
  const answer = getRandomNumber();
  const firstNum = secondNum * answer;
  const operator = Operator.DIVIDED_BY;
  const direction = getRandomDirection();

  const question = {
    firstNum,
    secondNum,
    operator,
  };

  return {
    question,
    direction,
    answer,
  };
};

const PROBLEM_OPTIONS = [getMultiplicationProblem, getDivisionProblem];

export const getProblem = (oldProblem: Problem = BASE_PROBLEM): Problem => {
  const random = Math.floor(Math.random() * PROBLEM_OPTIONS.length);
  console.log('random:', random);
  let newProblem;
  let found = false;

  while (!found) {
    newProblem = PROBLEM_OPTIONS[random]();

    if (
      !isSameQuestion(oldProblem, newProblem) &&
      !isSimilar(oldProblem, newProblem)
    ) {
      found = true;
    }
  }

  if (newProblem) {
    return newProblem;
  } else {
    return BASE_PROBLEM;
  }
};

export const isSameQuestion = (
  oldProblem: Problem,
  newProblem: Problem
): boolean => {
  return oldProblem.answer === newProblem.answer;
};

export const isSimilar = (oldProblem: Problem, newProb: Problem) => {
  if (
    newProb.question.firstNum === oldProblem.question.firstNum ||
    newProb.question.secondNum === oldProblem.question.secondNum ||
    newProb.answer === oldProblem.answer
  ) {
    return true;
  }

  return false;
};
