import React from 'react';
import './subjectcards.css';

const subjects = ['DSA', 'Maths 1', 'Maths 2', 'Web Development'];

function SubjectCards() {
  return (
    <div className="cards-container">
      {subjects.map((subject) => (
        <div className="card" key={subject}>
          <h3>{subject}</h3>
          <button className="start-button">Open</button>
        </div>
      ))}
    </div>
  );
}

export default SubjectCards;
