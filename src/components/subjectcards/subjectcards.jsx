import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom'; 
import './subjectcards.css'; 

const subjects = [
  { name: 'DSA', route: 'dsa', progress: 60 },
  { name: 'Maths 1', route: 'maths1', progress: 45 },
  { name: 'Maths 2', route: 'maths2', progress: 70 },
  { name: 'Web Development', route: 'webdev', progress: 80 },
];

function SubjectCards() {
  const navigate = useNavigate(); 

  const handleClick = (route) => {
    navigate(`/quiz/${route}`); 
  };

  return (
    <div className="cards-container">
      {subjects.map(({ name, route, progress }) => (
        <div className="card" key={name}>
          <h3>{name}</h3>
          <ProgressBar now={progress} label={`${progress}%`} className="subject-progress" />
          <button className="start-button" onClick={() => handleClick(route)}>
            Open now
          </button>
        </div>
      ))}
    </div>
  );
}

export default SubjectCards;
