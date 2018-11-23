import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getActiveEnemies } from '../../selectors/enemy'
import Enemy from '../enemy'

class ActiveEnemies extends React.Component {
  static propTypes = {
    activeEnemies: PropTypes.array.isRequired
  }

  renderEnemies() {
    return this.props.activeEnemies.map(enemyName => <Enemy key={enemyName} enemyName={enemyName} />)
  }

  render() {
    return <div>{this.renderEnemies()}</div>
  }
}

function mapStateToProps(state) {
  return {
    activeEnemies: getActiveEnemies(state)
  }
}

export default connect(
  mapStateToProps,
  {}
)(ActiveEnemies)
