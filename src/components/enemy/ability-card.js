import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AbilityCard extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  }

  render () {
    const { card } = this.props
    return (
      <div>
        <h2>Ability Card</h2>
        <h3>Initiative: {card.initiative}</h3>
        <p>Movement: {card.movement}</p>
        <p>Attack: {card.attack}</p>
        <p>Heal: {card.heal}</p>
        <p>Shield: {card.shield}</p>
        <p>Reshuffle: {card.reshuffle}</p>
        <p>Description: {card.descriptors}</p>
      </div>
    )
  }
}

export default AbilityCard
