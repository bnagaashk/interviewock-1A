import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {counter: false, userData: ''}

  onincrement = () => {
    this.setState(prevState => ({counter: !prevState.counter}))
  }

  onchangeValue = event => this.setState({userData: event.target.value})

  render() {
    const {counter, userData} = this.state
    return (
      <div className="bg-ccontainer">
        <div className="inner-container">
          <h1>Editable Text Input</h1>

          <div>
            {counter ? (
              <p>{userData}</p>
            ) : (
              <div>
                <label htmlFor="input" />
                <input
                  type="text"
                  id="input"
                  value={userData}
                  onChange={this.onchangeValue}
                />{' '}
              </div>
            )}

            {counter ? (
              <button type="button" className="btn" onClick={this.onincrement}>
                edit
              </button>
            ) : (
              <button type="button" className="btn" onClick={this.onincrement}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
