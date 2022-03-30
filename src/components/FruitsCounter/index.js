// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => {
      console.log(`previousValue is ${prevState.mangoCount}`)
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  eatBanana = () => {
    this.setState(prevState => {
      console.log(`previousValue is ${prevState.bananaCount}`)
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="Bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="counter"> {mangoCount} </span> mangoes
            <span className="counter"> {bananaCount} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-Container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="logo"
              />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat mango
              </button>
            </div>

            <div className="mango-Container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="logo"
              />
              <button className="button" type="button" onClick={this.eatBanana}>
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
