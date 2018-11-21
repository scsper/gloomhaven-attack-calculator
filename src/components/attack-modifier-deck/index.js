import React from 'react'

class AttackModifierDeck extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.deck.peek().attack}</div>
        <button onClick={this.props.onDraw}>Draw new card</button>
      </div>
    )
  }
}

export default AttackModifierDeck
