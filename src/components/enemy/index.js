import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AbilityCard from './ability-card'
import styles from './index.module.css'
import { enemyRemovedFromGame } from '../../actions/enemy-removed-from-game'
import { getEnemy, getAbilityCard } from '../../selectors/enemy'
import { isRoundStarted } from '../../selectors/round'

class Enemy extends React.Component {
  static propTypes = {
    enemy: PropTypes.object.isRequired,
    isRoundStarted: PropTypes.bool.isRequired
  }

  onRemove = () => {
    this.props.enemyRemovedFromGame(this.props.enemy.name)
  }

  renderStats() {
    const { enemy } = this.props

    return (
      <div>
        <h3>Stats</h3>
        <p>Health: {enemy.health}</p>
        <p>Movement: {enemy.move}</p>
        <p>Attack: {enemy.attack}</p>
        <p>Range: {enemy.range}</p>
        <p>Attributes: {enemy.attributes}</p>
      </div>
    )
  }

  render() {
    const { enemy, isRoundStarted } = this.props

    return (
      <div className={styles.enemy}>
        <div className={styles.nameContainer}>
          <h1>{enemy.name}</h1>
          <button onClick={this.onRemove}>x</button>
        </div>
        <div className={styles.container}>
          {this.renderStats()}
          {isRoundStarted ? <AbilityCard card={this.props.abilityCard} /> : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    enemy: getEnemy(state, ownProps.enemyName),
    abilityCard: getAbilityCard(state, ownProps.enemyName),
    isRoundStarted: isRoundStarted(state)
  }
}
export default connect(
  mapStateToProps,
  { enemyRemovedFromGame }
)(Enemy)
