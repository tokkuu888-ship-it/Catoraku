import React from 'react';

export default function NextMilestonesCard({ milestones = [] }) {
  return (
    <div className="card">
      <h3>Next Milestones</h3>
      <ul>
        {milestones.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
}
