import React from 'react';
import './subjectcards.css';

const subjects = [
  { name: 'DSA', route: 'dsa' },
  { name: 'Maths 1', route: 'maths1' },
  { name: 'Maths 2', route: 'maths2' },
  { name: 'Web Development', route: 'webdev' },
];

function SubjectCards() {
  // Open the quiz route in a new browser tab
  const handleClick = (route) => {
    window.open(`/quiz/${route}`, '_blank');
  };

  return (
    <div className="cards-container">
      {subjects.map(({ name, route }) => (
        <div className="card" key={name}>
          <h3>{name}</h3>
          <button className="start-button" onClick={() => handleClick(route)}>
            Take Quiz
          </button>
        </div>
      ))}
    </div>
  );
}

export default SubjectCards;
