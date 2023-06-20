import React from 'react'
import Dropdown from './Dropdown'

const Faq = () => {
    const faqData = [
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
          question: 'How do I install React?',
          answer: 'You can install React by using the npm package manager.',
        },
        // Add more FAQ items as needed
      ];
    
      return (
        <div>
          <h1>Frequently Asked Questions</h1>
          {faqData.map((item, index) => (
            <Dropdown
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      );

}

export default Faq
