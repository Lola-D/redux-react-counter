import React, { Component } from 'react'
import { connect } from 'react-redux'

const addOne = { type: 'ADDONE' }
const addTen = { type: 'ADDTEN' }
const removeOne = { type: 'REMOVEONE' }
const removeTen = { type: 'REMOVETEN' }
const reset = { type: 'RESET' }

class Counter extends Component {
  render() {
    const { count, dispatch } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(addOne)}>+1</button>
        <button onClick={() => dispatch(addTen)}>+10</button>
        <button onClick={() => dispatch(removeOne)}>-1</button>
        <button onClick={() => dispatch(removeTen)}>-10</button>
        <button onClick={() => dispatch(reset)}>reset</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state
})

const CounterContainer = connect(mapStateToProps)(Counter)

export default CounterContainer