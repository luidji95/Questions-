import React from 'react';

function QuestionCard({ question, answer, isExpanded, onToggle }) {
  return (
    <div className="question-card">
      <div className="question-header">
        <h3>{question}</h3>
        <button onClick={onToggle} className="toggle-button">
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && <p className="answer">{answer}</p>}
    </div>
  );
}

export default QuestionCard;
