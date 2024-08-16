'use client';
import { useEffect, useState } from 'react';
import { Direction, Problem } from '@/lib/types';
import { getProblem } from '@/lib/utils';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

export default function FlashCard() {
  const [problem, setProblem] = useState<Problem>(getProblem());
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getNext = () => {
    setProblem(getProblem());
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(true);
    setTimeout(() => getNext(), 2000);
  };
  const { direction } = problem;

  if (!isMounted) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {direction === Direction.HORIZONTAL ? (
        <HorizontalCard
          problem={problem}
          isFlipped={isFlipped}
          onClick={flipCard}
        />
      ) : (
        <VerticalCard
          problem={problem}
          isFlipped={isFlipped}
          onClick={flipCard}
        />
      )}
    </div>
  );
}
