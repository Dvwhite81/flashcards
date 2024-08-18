import { Direction, Problem } from '@/lib/types';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

type Props = {
  problem: Problem;
  isFlipped: boolean;
  flipCard: () => void;
};

export default function FlashCard({ problem, isFlipped, flipCard }: Props) {
  console.log('problem:', problem);
  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      onClick={flipCard}
    >
      {problem.direction === Direction.HORIZONTAL ? (
        <HorizontalCard problem={problem} isFlipped={isFlipped} />
      ) : (
        <VerticalCard problem={problem} isFlipped={isFlipped} />
      )}
    </div>
  );
}
