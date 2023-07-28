// https://chat.openai.com/
// Accessed on: 28 July, 2023
// Createdquestion and answers for faq

import React from "react";
import Dropdown from "./Dropdown";

const Faq = () => {
  const faqData = [
    {
      question:
        "How do I book tickets for an event?",
      answer:
        "To book tickets for an event, simply navigate to the event list, select the desired ticket type and quantity, and click book now button.",
    },
    {
      question: "Can I cancel or refund my ticket purchase?",
      answer:
        "Ticket cancellation and refund policies are there for event. You can modify and cancel the ticket bookings.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods, including credit cards, debit cards, and online payment platforms like PayPal. Rest assured, your payment information is kept secure.",
    },
    {
      question:
        "Can I get a refund if I can't attend the event?",
      answer:
        "Refund policies vary for each event. Some events offer refunds if canceled within a specified period, while others may have a no-refund policy. Check the event details or contact our support team for more information.",
    },
    {
      question: "How will I receive my tickets?",
      answer:
        "After successful booking, you'll receive an e-ticket via email or a mobile ticket on your device. Make sure to bring the ticket, either printed or digital, to the event for entry.",
    },
  ];

  return (
    <div>
      <h1 className="text-center m-5">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <Dropdown key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
