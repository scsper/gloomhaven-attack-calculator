import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { endRound } from '../../actions/end-round'
import styles from './index.module.css'

class Header extends React.Component {
  static propTypes = {
    endRound: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Gloomhaven Attack Calculator</h1>
        <button onClick={this.props.endRound}>End Round</button>
      </div>
    )
  }
}

export default connect(
  () => ({}),
  { endRound }
)(Header)
