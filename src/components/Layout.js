import React from 'react';
import GuessInput from './GuessInput';
import Feedback from './Feedback';
import History from './History';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mysteryNumber: Math.floor(Math.random() * 100 + 1),
      currentGuess: '',
      guesses: [],
      feedbackOptions: ['Hot', 'Cold'],
      currentFeedback: ''
    };
  }

  render() {
    return(
      <div>
        <Feedback />
        <GuessInput />
        <History />
      </div>
    )
  }
}
