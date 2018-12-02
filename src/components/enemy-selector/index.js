import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getEnemyList } from '../../enemies'
import Trie from '../../platform/trie'
import { enemyAddedToGame } from '../../actions/enemy-added-to-game'
import { EnemyTypes } from '../../consts'

import styles from './enemy-selector.module.css'

class EnemySelector extends React.Component {
  constructor() {
    super()
    this.trie = new Trie(getEnemyList())
    this.state = {
      value: ''
    }
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  onClick = e => {
    this.props.enemyAddedToGame()
  }

  renderEnemyNames(enemyNames) {
    return enemyNames.map(enemyName => (
      <EnemyName key={enemyName} enemyName={enemyName} onClick={this.props.enemyAddedToGame} />
    ))
  }

  render() {
    const enemyNames = this.trie.getAllPossibleWordsWithCapitals(this.state.value)
    const listClass = enemyNames.length ? styles['open-list'] : styles['list'];
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Enemy Selector</h3>
        <input placeholder="Search for an enemy..." onChange={this.onChange} value={this.state.value} />
        <ul className={listClass} >{this.renderEnemyNames(enemyNames)}</ul>
      </div>
    )
  }
}

class EnemyName extends React.Component {
  static propTypes = {
    enemyName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onClick = () => {
    // TODO: Add handling for Elite enemies
    this.props.onClick(this.props.enemyName, EnemyTypes.NORMAL)
  }

  render() {
    return <li className={styles.name} onClick={this.onClick}>{this.props.enemyName}</li>
  }
}

export default connect(
  () => ({}),
  { enemyAddedToGame }
)(EnemySelector)
