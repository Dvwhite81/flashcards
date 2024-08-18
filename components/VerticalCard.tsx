import { Problem } from '@/lib/types';
import { Card } from './ui/card';
import Answer from './Answer';
import Question from './Question';

type Props = {
  problem: Problem;
  isFlipped: boolean;
};

export default function VerticalCard({ problem, isFlipped }: Props) {
  return (
    <Card className="flashcard h-full w-[50vh]">
      <Question problem={problem} />
      {isFlipped && <Answer problem={problem} />}
    </Card>
  );
}
