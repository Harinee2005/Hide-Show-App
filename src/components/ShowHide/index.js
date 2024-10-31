import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstNameShown: false, isLastNameShown: false}

  firstName = () => {
    this.setState(prevState => ({
      isFirstNameShown: !prevState.isFirstNameShown,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({isLastNameShown: !prevState.isLastNameShown}))
  }

  render() {
    const {isFirstNameShown, isLastNameShown} = this.state
    let firstNameContent
    let lastNameContent

    if (isFirstNameShown) {
      firstNameContent = (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    }

    if (isLastNameShown) {
      lastNameContent = (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    }

    return (
      <div className="background">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button className="btn" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstNameContent}
          </div>
          <div>
            <button className="btn" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lastNameContent}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
