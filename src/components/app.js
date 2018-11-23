import React, { Component } from 'react'
import Enemy from './enemy'
import AttackModifierDeck from './attack-modifier-deck'
import EnemySelector from './enemy-selector'

class App extends Component {
  constructor() {
    super()

    this.state = initializeState()
  }

  endRound = () => {
    this.setState({
      roundCount: this.state.roundCount + 1
    })
  }

  renderEnemies() {
    // return this.state.enemies.map(enemy => <Enemy key={enemy.name} enemy={enemy} />)
  }

  render() {
    return (
      <div className="app">
        <EnemySelector />
        {/* {this.renderEnemies()} */}
        <AttackModifierDeck />
      </div>
    )
  }
}

export default App

function initializeState() {
  // const enemies = [new Enemies.LivingBones()]
  // enemies.forEach(enemy => enemy.setLevel(1))
}
