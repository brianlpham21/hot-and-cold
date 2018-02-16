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
      feedback: 'Hot or Cold?',
      guess: ''
    };
  }

  handleGuess(guess) {
    let feedback;

    if (!guess) {
      feedback = "Please enter a valid number!";

      this.setState({
        feedback
      });

      return;
    }

    if ((this.state.guesses).includes(guess)) {
      feedback = "Already guessed!";

      this.setState({
        feedback
      });

      return;
    }

    if (Number(guess) === this.state.correctAnswer) {
      feedback = `Correct! You got it! It was ${this.state.correctAnswer}!`;

      this.setState({
        feedback,
        guess
      });

      return;
    }

    const difference = (Math.abs(this.state.correctAnswer - guess));

    if (difference > 20) {
      feedback = "You're Ice Cold";
    }
    else if (difference > 10) {
      feedback = "You're Warmer";
    }
    else if (difference > 5) {
      feedback = "You're Hot";
    }
    else {
      feedback = "You're on Fire";
    }

    this.setState({
      guess,
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return (
      <main>
        <GuessSection onGuess={guess => this.handleGuess(guess)} />
        <FeedbackSection
          currentGuess={this.state.guess}
          feedback={this.state.feedback} />
        <HistorySection guesses={this.state.guesses} />
      </main>
    )
  }
}
