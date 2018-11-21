import React, { Component } from 'react';
import Enemies from '../enemies'
import Enemy from './enemy'
import AttackModifierDeck from './attack-modifier-deck'
import EnemyAttackModifierDeck from '../decks/enemy-attack-modifier'

class App extends Component {
  constructor () {
    super()

    this.state = initializeState()
  }

  endTurn = () => {
    this.state.enemyAttackModifierDeck.draw()

    this.setState({
      enemyTurn: Math.min(this.state.enemyTurn + 1, this.state.enemies.length - 1)
    })
  }

  endRound = () => {
    this.setState({
      roundCount: this.state.roundCount + 1
    })
  }

  renderEnemies () {
    return this.state.enemies.map((enemy) => <Enemy key={enemy.name} enemy={enemy} />)
  }

  render() {
    return (
      <div className="app">
        {this.renderEnemies()}
        <AttackModifierDeck deck={this.state.enemyAttackModifierDeck} onDraw={this.endTurn} />
      </div>
    );
  }
}

export default App;

function initializeState () {
  const enemyLevel = 1
  const enemies = [new Enemies.LivingBones()]
  const enemyAttackModifierDeck = new EnemyAttackModifierDeck()
  const enemyTurn = 0
  const roundCount = 0

  enemies.forEach(enemy => enemy.setLevel(1))

  return {
    enemyLevel,
    enemies,
    enemyAttackModifierDeck,
    enemyTurn,
    roundCount
  }
}
