import React from "react";
import { Button } from "wjec-one";
const Choice = ({ onClick, choiceData, round }) => {
  const c = () => {
    let x;
    if (round === 2)
      if (choiceData.isCorrect === true) {
        x = "green";
      } else {
        x = "red";
      }
    else {
      x = "brown";
    }

    return x;
  };

  return (
    <Button
      onClick={onClick}
      label={choiceData.choiceTxt}
      color={choiceData.isSelected ? "tomato" : null}
      labelColor={choiceData.userSelect ? c : null}
    />
  );
};
export default Choice;
