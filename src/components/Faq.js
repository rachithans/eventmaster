import React from 'react'
import Dropdown from './Dropdown'

const Faq = () => {
    const faqData = [
        {
          question: 'Eos consequatur quas qui voluptatibus voluptas qui tempora galisum?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Qui ipsam ullam 33 dolorem aut laboriosam rerum?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Ullam dolorem reprehenderit qui?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Qui ipsam ullam dolorem reprehenderit qui maxime nihil aut laboriosam rerum?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Eos oluptas qui tempora galisum?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Eos consequatur quas qui voluptatibus?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Eos consequatur quas qui voluptatibus?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Eos consequatur quas quias qui tempora galisum?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        },
        {
          question: 'Qui ipsam ullam dolorem reprehenderit qui maxime?',
          answer: 'At consequatur quam a dolores repudiandae qui nisi enim et similique provident in deleniti ipsum ut ipsam quibusdam sit dolorem ratione. Id molestias optio qui laborum alias et iure impedit ab sunt quia eos eius doloribus est voluptas alias qui voluptatum repellendus.',
        }
      ];
    
      return (
        <div>
          <h1 className='text-center m-5'>Frequently Asked Questions</h1>
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
