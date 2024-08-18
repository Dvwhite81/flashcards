'use client';
import { create } from 'zustand';
import { Problem } from '@/lib/types';
import { getProblem } from '@/lib/utils';

type States = {
  problem: Problem;
  isFlipped: boolean;
  numQuestions: number;
};

type Actions = {
  flipCard: () => void;
};

export const useStore = create<States & Actions>((set) => ({
  problem: getProblem(),
  isFlipped: false,
  numQuestions: 10,
  flipCard: () => {
    set((state) => ({
      isFlipped: true,
    }));

    const getNextProblem = () => {
      const newProblem = getProblem();
      set((state) => ({
        problem: newProblem,
        isFlipped: false,
        numQuestions: state.numQuestions - 1,
      }));
    };

    setTimeout(() => {
      getNextProblem();
    }, 2000);
  },
}));
