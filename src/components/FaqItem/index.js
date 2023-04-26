// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  answerContainer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    return (
      <>
        <hr className="horizantal-line" />
        <p className="answer">{answerText}</p>
      </>
    )
  }

  toggleButton = () => {
    this.setState(previousState => ({isActive: !previousState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const imageUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imageAltText = isActive ? 'minus' : 'plus'

    return (
      <li className="card-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.toggleButton}>
            <img src={imageUrl} alt={imageAltText} className="logo" />
          </button>
        </div>

        {isActive && this.answerContainer()}
      </li>
    )
  }
}

export default FaqItem
