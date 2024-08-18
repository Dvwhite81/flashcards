'use client';
import { useEffect, useState } from 'react';
import { Problem } from '@/lib/types';
import { getProblem } from '@/lib/utils';
import FlashCard from '@/components/FlashCard';
import { BASE_PROBLEM } from '@/lib/data';
import { useStore } from '@/store';

export default function Home() {
  const [levelIsOver, setLevelIsOver] = useState(false);

  const { problem, isFlipped, numQuestions, flipCard } = useStore();

  useEffect(() => {
    if (numQuestions < 1) {
      setLevelIsOver(true);
    }
  }, [numQuestions]);

  return (
    <div className="h-full p-20">
      {levelIsOver && <p>Level is over</p>}
      {!levelIsOver && (
        <FlashCard
          problem={problem}
          isFlipped={isFlipped}
          flipCard={flipCard}
        />
      )}
      <p>numQuestions: {numQuestions}</p>
    </div>
  );
}
