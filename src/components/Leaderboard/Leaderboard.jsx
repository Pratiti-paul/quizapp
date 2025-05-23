import React from 'react';
import './Leaderboard.css';

const leaderboardData = [
  { name: 'Pratiti Paul', score: 120 },
  { name: 'Pratiti Paul', score: 110 },
  { name: 'Pratiti Paul', score: 90 },
  { name: 'Pratiti Paul', score: 80 },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <ul className="leaderboard-list">
        {leaderboardData.map((user, index) => (
          <li key={index} className="leaderboard-item">
            <div className="rank-badge">{index + 1}</div>
            <span className="user-name">{user.name}</span>
            <span className="user-score">{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
