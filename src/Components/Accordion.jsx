import { useState } from 'react';
import './Accordion.css';

const defaultFaqData = [
  // fallback in case no faqs prop is provided
  {
    title: 'What is FitMaker and how can it help me reach my fitness goals?',
    content:
      "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    title: 'How do I get started with a workout plan on FitMaker?',
    content:
      'To get started, sign up on our website, complete our fitness assessment questionnaire, and our system will generate a personalized workout plan based on your goals and fitness level. You can then connect with your dedicated trainer to begin your journey.',
  },
  {
    title: 'What is included in the custom plan?',
    content:
      'Each custom plan includes personalized workout routines, nutrition plans, progress tracking, weekly check-ins with your trainer, access to video tutorials, and community support forums.',
  },
  {
    title: 'Can I change my plan after signing up?',
    content:
      "Yes, you can modify your plan at any time. Contact your trainer or use our platform's plan adjustment feature to update your goals or preferences as needed.",
  },
  {
    title: 'What kind of support can I expect from my trainer?',
    content:
      'You can expect one-on-one coaching, weekly progress reviews, motivational support, answers to your fitness questions, and guidance on nutrition and exercise technique through our messaging system and scheduled video calls.',
  },
];

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        style={{ borderColor: isOpen ? '#d90a14' : '' }}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </div>
      {isOpen && (
        <div
          className="accordion-content"
          style={{ borderColor: isOpen ? '#d90a14' : '' }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

function Accordion({ faqs }) {
  const data = faqs || defaultFaqData;
  return (
    <div className="items">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
