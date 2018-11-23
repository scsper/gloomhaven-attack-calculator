import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AbilityCard extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  }

  render() {
    const { card } = this.props
    return (
      <div>
        <h2>Ability Card</h2>
        <h3>Initiative: {card.initiative}</h3>
        <p>Movement: {card.move}</p>
        <p>Attack: {card.attack}</p>
        <p>Attributes: {card.attributes}</p>
        <p>Reshuffle: {card.reshuffle}</p>
      </div>
    )
  }
}

export default AbilityCard
