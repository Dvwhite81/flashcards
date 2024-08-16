import { PropsWithChildren } from 'react';
import { Card } from './ui/card';
import { Problem } from '@/lib/types';
import Answer from './Answer';
import Question from './Question';

type Props = {
  problem: Problem;
  isFlipped: boolean;
  onClick: () => void;
};

export default function HorizontalCard({ problem, isFlipped, onClick }: Props) {
  return (
    <Card className="flashcard h-[50vh] w-full flex" onClick={onClick}>
      <Question problem={problem} />
      {isFlipped && <Answer problem={problem} />}
    </Card>
  );
}
