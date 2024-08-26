interface ScoreProps {
  score: number;
}
export const Score = ({ score }: ScoreProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-5 justify-center mt-5 mb-10">
      <span className="font-medium text-3xl text-slate-700 ">{score}</span>
      <span className="font-medium text-lg text-slate-700">
        You have scored{" "}
        <span className="text-lg font-medium text-blue-600">{score}</span>{" "}
        points of total{" "}
        <span className="text-lg font-medium text-blue-600">7</span> points.
      </span>
    </div>
  );
};
