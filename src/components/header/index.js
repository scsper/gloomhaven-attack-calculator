import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { endRound, startRound } from '../../actions/round'
import { endTurn } from '../../actions/end-turn'
import { changeLevel } from '../../actions/change-level'
import { isRoundStarted, getRoundCount } from '../../selectors/round'
import styles from './index.module.css'
import { getLevel } from '../../selectors/level'

class Header extends React.Component {
  static propTypes = {
    endRound: PropTypes.func.isRequired,
    endTurn: PropTypes.func.isRequired,
    startRound: PropTypes.func.isRequired,
    roundCount: PropTypes.number.isRequired,
    isRoundStarted: PropTypes.bool.isRequired
  }

  renderStartRoundButton() {
    return <button onClick={this.props.startRound}>Start Round</button>
  }

  renderEndRoundButtons() {
    return (
      <React.Fragment>
        <button onClick={this.props.endTurn}>End Turn</button>
        <button onClick={this.props.endRound}>End Round</button>
      </React.Fragment>
    )
  }

  onLevelChange = e => {
    this.props.changeLevel(e.target.value)
  }

  renderLevelSetter() {
    return (
      <select value={this.props.level} onChange={this.onLevelChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Gloomhaven Attack Calculator</h1>
        <div>
          <div>{this.renderLevelSetter()}</div>
          <div>Round: {this.props.roundCount}</div>
          {!this.props.isRoundStarted ? this.renderStartRoundButton() : this.renderEndRoundButtons()}
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isRoundStarted: isRoundStarted(state),
      roundCount: getRoundCount(state),
      level: getLevel(state)
    }
  },
  { changeLevel, endRound, endTurn, startRound }
)(Header)
