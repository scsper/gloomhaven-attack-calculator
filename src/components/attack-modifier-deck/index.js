import React from 'react'
import { connect } from 'react-redux'
import { getTopCard } from '../../selectors/enemy/attack-modifier-deck'
import { endTurn } from '../../actions/end-turn'
import { AttackModifierTypes } from '../../consts'

class AttackModifierDeck extends React.Component {
  onClick = () => {
    this.props.endTurn(this.props.card)
  }

  getAttackValue() {
    const { card } = this.props

    if (card.type === AttackModifierTypes.NULL) {
      return 'null'
    } else if (card.type === AttackModifierTypes.DOUBLE_DAMAGE) {
      return '2x'
    }

    return card.attack
  }

  render() {
    return (
      <div>
        <div>{this.getAttackValue()}</div>
        <button onClick={this.onClick}>Draw new card</button>
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
