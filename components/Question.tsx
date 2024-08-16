import { FaDivide, FaTimes } from 'react-icons/fa';
import { Direction, Problem } from '@/lib/types';
import { getRandomColor } from '@/lib/utils';

type Props = {
  problem: Problem;
};

export default function Question({ problem }: Props) {
  const { question, direction } = problem;
  const { firstNum, secondNum, operator } = question;

  const secondNumClass =
    direction === Direction.HORIZONTAL ? 'flex items-end ' : '';

  return (
    <>
      <div className="number pl-6" style={{ color: getRandomColor() }}>
        {firstNum}
      </div>
      <div className="flex m-auto text-7xl h-1/3">
        {operator === '*' && <FaTimes className="m-auto" />}
        {operator === '/' && <FaDivide className="m-auto" />}
      </div>
      <div
        className={secondNumClass + 'number text-right pr-6'}
        style={{ color: getRandomColor() }}
      >
        {secondNum}
      </div>
    </>
  );
}
