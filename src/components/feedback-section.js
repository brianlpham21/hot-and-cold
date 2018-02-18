import React from 'react';

export default function FeedbackSection(props) {
  const current = props.currentGuess;

  return (
    <div>
      <h1>{props.feedback}</h1>
      <p>Your Current Guess: {current}</p>
    </div>
  )
}
