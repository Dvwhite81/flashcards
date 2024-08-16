export enum Operator {
  TIMES = '*',
  DIVIDED_BY = '/',
}

export enum Direction {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

export type Question = {
  firstNum: number;
  secondNum: number;
  operator: Operator;
};

export type Problem = {
  question: Question;
  direction: Direction;
  answer: number;
};
