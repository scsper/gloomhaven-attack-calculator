import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTopCard } from '../../selectors/enemy'
import { AttackModifierTypes } from '../../consts'

class AttackModifierDeck extends React.Component {
  static propTypes = {
    card: PropTypes.object.isRequired
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
        <h2>Attack Modifier Deck</h2>
        <div>{this.getAttackValue()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    card: getTopCard(state)
  }
}

export default connect(mapStateToProps)(AttackModifierDeck)
