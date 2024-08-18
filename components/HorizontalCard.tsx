import { Card } from './ui/card';
import { Problem } from '@/lib/types';
import Answer from './Answer';
import Question from './Question';

type Props = {
  problem: Problem;
  isFlipped: boolean;
};

export default function HorizontalCard({ problem, isFlipped }: Props) {
  return (
    <Card className="flashcard h-[50vh] w-full flex">
      <Question problem={problem} />
      {isFlipped && <Answer problem={problem} />}
    </Card>
  );
}
