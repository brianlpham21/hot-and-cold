import React from 'react';
import GuessSection from './guess-section';
import FeedbackSection from './feedback-section';
import HistorySection from './history-section';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.floor(Math.random() * 100 + 1),
      guesses: [],
      feedback: '',
      guess: ''
    };
  }

  onGuess(guess) {
    const difference = (Math.abs(this.state.correctAnswer - guess));

    let feedback;
    if (difference === 0) {
      feedback = "That's the Number!"
    }
    else if (difference > 20) {
      feedback = "You're Cold"
    }
    else {
      feedback = "You're Hot"
    }

    this.setState({
      guess,
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return(
      <main>
        <GuessSection onGuess={guess => this.onGuess(guess)} />
        <FeedbackSection correctAnswer={this.state.correctAnswer} currentGuess={this.state.guess} feedback={this.state.feedback} />
        <HistorySection guesses={this.state.guesses} />
      </main>
    )
  }
}
