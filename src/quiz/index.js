import React, { useState, useEffect } from "react";
import { Button } from "wjec-one";
import Question from "./question";
import Feedback from "./feedback/feedback";

const Quiz = ({ data }) => {
  const [quiz, setQuiz] = useState(data);
  const [idx, setIdx] = useState(0);
  const [quizRound, setQuizRound] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    //calc score
    const calcScore = answers => {
      let userCorrectAnswers = 0;
      let numberofAnswers = answers.filter(x => x.isCorrect).length;

      answers.forEach(x => {
        if (x.isCorrect && x.isSelected) {
          userCorrectAnswers++;
        }
      });

      if (userCorrectAnswers === numberofAnswers) {
        setScore(score + 1);
      }
    };

    calcScore(quiz[idx].choices);

    setIdx(idx + 1);
  };

  useEffect(() => {
    setShowNext(false);
  }, [idx]);

  const handleReplay = () => {
    setIdx(0);
    setScore(0);
    setQuizRound(quizRound + 1);

    const newQuiz = [...quiz];

    newQuiz.forEach(q => {
      q.choices.forEach(choice => {
        choice.userSelect = choice.isSelected;
        choice.isSelected = false;
      });
    });

    setQuiz(newQuiz);
  };

  const handleReset = () => {
    setIdx(0);
    setScore(0);
    setQuizRound(0);
    const newQuiz = [...quiz];

    newQuiz.forEach(q => {
      q.choices.forEach(choice => {
        choice.isSelected = false;
        choice.userSelect = false;
      });
    });
    setQuiz(newQuiz);
  };

  const handleChoice = choiceIdx => {
    const newQuiz = [...quiz];
    quiz[idx].choices[choiceIdx].isSelected === true
      ? (quiz[idx].choices[choiceIdx].isSelected = false)
      : (quiz[idx].choices[choiceIdx].isSelected = true);
    setQuiz(newQuiz);
  };
  useEffect(() => {
    const maxAnswers = quiz[idx].choices.filter(x => x.isCorrect).length;
    const maxSelect = quiz[idx].choices.filter(x => x.isSelected).length;
    if (maxAnswers === maxSelect) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  }, [quiz]);
  return (
    <React.Fragment>
      <p>Round: {quizRound}</p>
      {idx < quiz.length ? (
        <React.Fragment>
          <Question
            question={quiz[idx].question}
            choices={quiz[idx].choices}
            round={quizRound}
            choice={handleChoice}
          />
          {showNext ? (
            <Button label="Next question" onClick={handleNextQuestion} />
          ) : null}
        </React.Fragment>
      ) : (
        <Feedback
          data={quiz}
          round={quizRound}
          reset={handleReset}
          replay={handleReplay}
          score={score}
        />
      )}
    </React.Fragment>
  );
};
export default Quiz;
