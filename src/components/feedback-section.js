import React from 'react';

export default function FeedbackSection(props) {
  const current = props.currentGuess;
  const answer = props.correctAnswer;

  return (
    <div>
      <h1>{props.feedback}</h1>
      <p>Answer: {answer}</p>
      <p>Current Guess: {current}</p>
    </div>
  )
}
