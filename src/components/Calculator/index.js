import {Component} from 'react'
import {evaluate} from 'mathjs'

import './index.css'

const slice = require('array-slice')

class Calculator extends Component {
  state = {
    clickedButton: [],
    sum: 0,
    result: 0,
    resultClicked: false,
  }

  onButtonClicked = event => {
    if (event.target.name === 'AC') {
      console.log('AC clicked')
      this.setState({clickedButton: [], result: 0, isClicked: false})
    } else if (event.target.name === 'C') {
      const {result} = this.state

      const myArr = String(result)
        .split('')
        .map(num => {
          console.log(num)
          return Number(num)
        })
      console.log(myArr)

      const slicedValue = slice(myArr, 0, -1)
      this.setState({
        result: Number(slicedValue),
        clickedButton: Number(slicedValue),
      })
    } else if (event.target.name === '=') {
      const {clickedButton, result} = this.state
      this.setState({
        resultClicked: true,
        result: evaluate(clickedButton),
      })
    } else {
      const {result, resultClicked} = this.state

      this.setState(prevState => ({
        clickedButton: prevState.clickedButton + event.target.name,
      }))
    }
  }

  render() {
    const {clickedButton, result, resultClicked} = this.state
    console.log(clickedButton)
    console.log(result)
    return (
      <div className="calculator-container">
        <h1>Sanjay's Calculator</h1>
        {!resultClicked && clickedButton.length >= 1 ? (
          <p>{clickedButton}</p>
        ) : (
          <p>{result}</p>
        )}

        <div>
          <div className="buttons-container">
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="AC"
            >
              AC
            </button>

            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="C"
            >
              C
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="/"
            >
              /
            </button>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="7"
            >
              7
            </button>

            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="8"
            >
              8
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="9"
            >
              9
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="*"
            >
              X
            </button>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="4"
            >
              4
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="5"
            >
              5
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="6"
            >
              6
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="-"
            >
              -
            </button>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="1"
            >
              1
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="2"
            >
              2
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="3"
            >
              3
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="+"
            >
              +
            </button>
          </div>
          <div className="buttons-container">
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="00"
            >
              00
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="0"
            >
              0
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="."
            >
              .
            </button>
            <button
              type="button"
              className="calc-button"
              onClick={this.onButtonClicked}
              name="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Calculator
