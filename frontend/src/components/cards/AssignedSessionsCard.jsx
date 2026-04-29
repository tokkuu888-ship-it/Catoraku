import React from 'react';

export default function AssignedSessionsCard({ sessions = [] }) {
  return (
    <div className="card">
      <h3>Assigned Sessions</h3>
      <ul>
        {sessions.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
