import React from 'react'
import { getEnemyList } from '../../enemies'

class EnemySelector extends React.Component {
  renderList() {
    const enemyList = getEnemyList()

    return enemyList.map(enemy => <li key={enemy}>{enemy}</li>)
  }

  render() {
    return (
      <div>
        <h1>Enemy Selector</h1>
        <input placeholder="Search for an enemy..." />
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

export default EnemySelector
