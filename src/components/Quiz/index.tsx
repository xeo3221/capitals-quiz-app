import { data } from "../../data/data";
import { answerT } from "../../types/question";
import { Question } from "./Question";
import { QuizButtons } from "./QuizButtons";

interface QuizProps {
  currentQuestion: number;
  answers: answerT[];
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  done: () => void;
  setAnswers: React.Dispatch<React.SetStateAction<answerT[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const Quiz = ({
  currentQuestion,
  answers,
  setCurrentQuestion,
  done,
  setScore,
  setAnswers,
}: QuizProps) => {
  const next = () => {
    const hasNextQuestion = data[currentQuestion + 1];
    if (hasNextQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    } else done();
  };

  const back = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const onAnswer = (selectedId: number, questionId: number) => {
    const isQuestionAnswered = answers.some(
      (answer) => answer.questionId === questionId
    );
    if (isQuestionAnswered) {
      const index = answers.findIndex(
        (answer) => answer.questionId === questionId
      );
      if (answers[index].isCorrect) {
        setScore((prevScore) => prevScore - 1);
      }
      answers.slice(index, 1);
    }
    const isCorrect = data[currentQuestion].correctOption.id === selectedId;
    const answer = {
      questionId,
      answerId: selectedId,
      isCorrect,
    };
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (answer.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    next();
  };
  return (
    <>
      <div className="w-full flex items-center justify-center mt-5 mb-10">
        <span className="font-medium text-lg text-slate-700">
          {data[currentQuestion]?.title}
        </span>
      </div>
      <div className="flex items-center flex-wrap gap-5 md:justify-between justify-center w-4/5 mx-auto mb-5">
        {data[currentQuestion]?.options.map((option) => {
          return (
            <Question
              onAnswer={onAnswer}
              answers={answers}
              option={option}
              key={option.id}
            />
          );
        })}
      </div>
      <QuizButtons currentQuestion={currentQuestion} next={next} back={back} />
    </>
  );
};
