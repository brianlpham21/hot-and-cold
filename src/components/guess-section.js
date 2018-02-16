import React from 'react';
import './guess-section.css';

export default class GuessSection extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.onGuess(this.input.value);

    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} >
        <input type='number' min="0" max="100" ref={input =>(this.input = input)} />
        <button type='submit'>Guess!</button>
      </form>
    )
  }
}
