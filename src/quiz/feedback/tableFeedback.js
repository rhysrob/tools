import React from "react";

const TableFeedback = ({ answers, data }) => {
  const myAnswers = choices => {
    const x = choices.filter(item => {
      if (item.isSelected === true) {
        return item.choiceTxt;
      }
    });
    return x.map(item => <p>{item.choiceTxt}</p>);
  };

  const correctAnswers = choices => {
    const x = choices.filter(item => {
      if (item.isCorrect === true) {
        return item.choiceTxt;
      }
    });
    return x.map((item, idx) => <p key={idx}>{item.choiceTxt}</p>);
  };

  const checkAnswers = arr => {
    const userAns = arr.filter(x => x.isSelected === true);
    const x = !userAns.some(x => x.isCorrect === false);
    return x;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          {answers && <th>Correct Answer</th>}
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.question}</td>
            <td>{myAnswers(item.choices)}</td>
            {answers && <td>{correctAnswers(item.choices)}</td>}
            <td>
              {checkAnswers(item.choices) ? <span>✔</span> : <span>❌</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableFeedback;
