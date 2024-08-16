import { Problem } from '@/lib/types';

type Props = {
  problem: Problem;
};

export default function Answer({ problem }: Props) {
  const { answer } = problem;

  return (
    <div className="flex h-full w-full bg-black text-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <p className="number h-fit w-fit m-auto text-center items-center">
        {answer}
      </p>
    </div>
  );
}
