import React, { Component } from 'react'
import AttackModifierDeck from './attack-modifier-deck'
import EnemySelector from './enemy-selector'
import ActiveEnemies from './active-enemies'

import styles from './app.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <EnemySelector />
        <ActiveEnemies />
        <AttackModifierDeck />
      </div>
    )
  }
}

export default App
