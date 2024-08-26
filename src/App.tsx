import { useState } from "react";
import { answerT } from "./types/question";
import { Layout } from "./layout/index";
import { Quiz } from "./components/Quiz/index";
import { Result } from "./components/Result";

export const App = () => {
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<answerT[]>([]);

  const reset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setAnswers([]);
    setDone(false);
  };
  const onDone = () => {
    setDone(true);
  };
  return (
    <Layout>
      {done ? (
        <Result score={score} reset={reset} />
      ) : (
        <Quiz
          setAnswers={setAnswers}
          setScore={setScore}
          setCurrentQuestion={setCurrentQuestion}
          done={onDone}
          currentQuestion={currentQuestion}
          answers={answers}
        />
      )}
    </Layout>
  );
};
