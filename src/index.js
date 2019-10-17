import React from "react";
import ReactDOM from "react-dom";
import quiz from "./quiz.json";
import "./styles.css";
import Quiz from "./quiz/";
function App() {
  return (
    <div className="App">
      <Quiz data={quiz} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
