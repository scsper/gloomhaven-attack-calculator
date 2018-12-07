import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ability-card.module.css'

class AbilityCard extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired
  }

  render() {
    const { card } = this.props
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Ability Card</h3>
        <p className={styles.initiative}>Initiative: {card.initiative}</p>
        <p>Movement: {card.move}</p>
        <p>Attack: {card.attack}</p>
        <p>Attributes: {card.attributes}</p>
      </div>
    )
  }
}

export default AbilityCard
