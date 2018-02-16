import React from 'react';

export default class GuessSection extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.onGuess(this.input.value)

    this.input.value = ''
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)} >
        <input type='number' ref={input =>(this.input = input)} />
        <button type='submit'>Guess!</button>
      </form>
    )
  }
}
