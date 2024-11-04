import React, { useState } from 'react';

function QuestionCard({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Funkcija za prebacivanje stanja
  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <h3>{question}</h3>
        <button onClick={toggleAnswer} className="toggle-button">
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && <p className="answer">{answer}</p>}
    </div>
  );
}

export default QuestionCard;
