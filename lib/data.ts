import { Direction, Operator, Problem } from './types';

export const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'blueviolet',
];

export const OPERATORS = [Operator.DIVIDED_BY, Operator.TIMES];

export const DIRECTIONS = [Direction.HORIZONTAL, Direction.VERTICAL];

export const BASE_PROBLEM: Problem = {
  question: {
    firstNum: 0,
    secondNum: 0,
    operator: Operator.TIMES,
  },
  direction: Direction.VERTICAL,
  answer: 0,
};
