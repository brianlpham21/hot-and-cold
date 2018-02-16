import React from 'react';
import './history-section.css';

export default function HistorySection(props) {
  const pastGuesses = props.guesses.map((guess, index) =>
    <li key={index}>{guess}</li>
  )

  return (
    <div>
      <h2>These are the past guesses:</h2>
      <ul>
        {pastGuesses}
      </ul>
    </div>
  )
}
