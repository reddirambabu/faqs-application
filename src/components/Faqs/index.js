// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachFaqDetails => (
            <FaqItem key={eachFaqDetails.id} faqDetails={eachFaqDetails} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
