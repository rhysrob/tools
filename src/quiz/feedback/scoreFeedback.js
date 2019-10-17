import React from "react";
const ScoreFeedback = ({ score, max }) => (
  <React.Fragment>
    <p>
      You scored {score} out of {max}
    </p>
  </React.Fragment>
);

export default ScoreFeedback;
