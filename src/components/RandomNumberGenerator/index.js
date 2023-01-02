// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="button" type="button" onClick={this.getRandomNumber}>
          Generate
        </button>
        <p className="number">{count}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
