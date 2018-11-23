import React, { Component } from 'react'
import AttackModifierDeck from './attack-modifier-deck'
import EnemySelector from './enemy-selector'
import ActiveEnemies from './active-enemies'
import Header from './header'

import styles from './app.module.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.content}>
          <EnemySelector />
          <ActiveEnemies />
          <AttackModifierDeck />
        </div>
      </div>
    )
  }
}

export default App
