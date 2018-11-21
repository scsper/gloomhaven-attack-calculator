import React from 'react'
import PropTypes from 'prop-types'
import AbilityCard from './ability-card'
import styles from './index.module.css'

class Enemy extends React.Component {
  static propTypes = {
    enemy: PropTypes.object.isRequired
  }

  renderStats () {
    const { enemy } = this.props
    const baseStats = enemy.getBaseStats()
    const card = enemy.deck.peek()

    return (
      <div>
        <h2>Stats</h2>
        <p>Health: {baseStats.health}</p>
        <p>Movement: {baseStats.movement + card.movement}</p>
        <p>Attack: {baseStats.attack + card.attack}</p>
        <p>Range: {baseStats.range}</p>
        <p>Target: {baseStats.target}</p>
        <p>Shield: {baseStats.shield}</p>
      </div>
    )
  }

  render () {
    const { enemy } = this.props
    const card = enemy.deck.peek()

    return (
      <div className={styles.enemy}>
        <h1>{enemy.name}</h1>
        <div className={styles.container}>
          {this.renderStats()}
          <AbilityCard card={card} />
        </div>
      </div>
    )
  }
}

export default Enemy
