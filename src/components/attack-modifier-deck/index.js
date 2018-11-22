import React from 'react'
import { connect } from 'react-redux'
import { getTopCard } from '../../selectors/enemy/attack-modifier-deck'
import { endTurn } from '../../actions/end-turn'

class AttackModifierDeck extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.card.attack}</div>
        <button onClick={this.props.endTurn}>Draw new card</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    card: getTopCard(state)
  }
}

export default connect(
  mapStateToProps,
  { endTurn }
)(AttackModifierDeck)
