import React, { Component } from 'react';
import './App.css';
import Enemies from './enemies'
import AbilityDecks from './ability-decks'

class App extends Component {
  renderEnemy (enemy, levelId, card) {
    const level = enemy.getLevel(levelId)

    return (
      <div>
        <h2>Living Bones</h2>
        <p>Health: {level.health}</p>
        <p>Movement: {level.movement + card.movement}</p>
        <p>Attack: {level.attack + card.attack}</p>
        <p>Range: {level.range}</p>
        <p>Target: {level.target}</p>
        <p>Shield: {level.shield}</p>
      </div>
    )
  }

  renderAbilityCard (card) {
    return (
      <div>
        <h2>Living Bones</h2>
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
    const card = deck.draw()

    return (
      <div className="app">
        {this.renderEnemy(new Enemies.LivingBones(), 1, card)}
        {this.renderAbilityCard(card)}
      </div>
    );
  }
}

export default App;
