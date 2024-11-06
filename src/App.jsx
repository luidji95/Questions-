import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";

const data = [
  {
    id: 1,
    isExpanded: false,
    question: "Do I Have To Allow The Use Of Cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    isExpanded: false,
    question: "How do I change my My Page password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    isExpanded: false,
    question: "What is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    isExpanded: false,
    question: "Whose birth number can I use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    isExpanded: false,
    question: "When do I receive a password ordered by letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
  },
];

function App() {
  const [questions, setQuestionState] = useState(data);

  const toggleQuestion = (id) => {
    const newArray = questions.map((item) => {
      return item.id === id ? { ...item, isExpanded: !item.isExpanded } : item;
    });
    setQuestionState(newArray);
  };

  return (
    <div className="app">
      <h1>Questions</h1>
      <div className="questions-container">
        {questions.map((item) => (
          <QuestionCard
            key={item.id}
            question={item.question}
            answer={item.answer}
            isExpanded={item.isExpanded}
            onToggle={() => toggleQuestion(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
