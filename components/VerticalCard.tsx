import { Problem } from '@/lib/types';
import { Card } from './ui/card';
import Answer from './Answer';
import Question from './Question';

type Props = {
  problem: Problem;
  isFlipped: boolean;
  onClick: () => void;
};

export default function VerticalCard({ problem, isFlipped, onClick }: Props) {
  return (
    <Card className="flashcard h-full w-[50vh]" onClick={onClick}>
      <Question problem={problem} />
      {isFlipped && <Answer problem={problem} />}
    </Card>
  );
}
