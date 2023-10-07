import {Component} from 'react'
import './index.css'

class Calculator extends Component {
  state = {
    clickedButton: [],
    sum: 0,
    result: 0,
  }

  onButtonClicked = event => {
    if (event.target.name === 'AC') {
      console.log('AC clicked')
      this.setState({clickedButton: '', result: 0})
    } else if (event.target.name === 'C') {
      console.log('C clicked')
    } else if (event.target.name === '=') {
      this.setState({clickedButton: [], result: '0'})
    }        clickedButton: [...prevState.clickedButton, event.target.name],
      }))
    }
  }

  render() {
    const {clickedButton, result} = this.state
    console.log(clickedButton)
    return (
      <div className="calculator-container">
        <h1>Sanjay's Calculator</h1>
        {clickedButton.length >= 1 ? <p>{clickedButton}</p> : <p>{result}</p>}

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
              name="%"
            >
              %
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
              name="X"
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
