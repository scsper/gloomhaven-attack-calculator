import React, { Component } from 'react';
import Enemies from '../enemies'
import AbilityDecks from '../decks/ability'

class App extends Component {
  renderEnemy (enemy, levelId, card) {
    const level = enemy.getLevel(levelId)

    return (
      <div>
        <h1>Enemies</h1>
        <h2>{enemy.name}</h2>
        <p>Health: {level.health}</p>
        <p>Movement: {level.movement + card.movement}</p>
        <p>Attack: {level.attack + card.attack}</p>
        <p>Range: {level.range}</p>
        <p>Target: {level.target}</p>
        <p>Shield: {level.shield}</p>
      </div>
    )
  }

  renderAbilityCard (enemy, card) {
    return (
      <div>
        <h1>Ability Cards</h1>
        <h2>{enemy.name}</h2>
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

  render() {
    const deck = new AbilityDecks.LivingBones()
    const enemy = new Enemies.LivingBones()
    const card = deck.draw()

    return (
      <div className="app">
        {this.renderEnemy(enemy, 1, card)}
        {this.renderAbilityCard(enemy, card)}
      </div>
    );
  }
}

export default App;
