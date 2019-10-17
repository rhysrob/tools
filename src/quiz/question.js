import React from "react";
import Choice from "./choice";

const Question = ({ question, choices, round, choice }) => {
  return (
    <React.Fragment>
      <h1>{question}</h1>
      {choices.map((item, idx) => (
        <Choice
          round={round}
          choiceData={item}
          onClick={() => choice(idx)}
          label={item.choiceTxt}
          key={idx}
        />
      ))}
    </React.Fragment>
  );
};

export default Question;
