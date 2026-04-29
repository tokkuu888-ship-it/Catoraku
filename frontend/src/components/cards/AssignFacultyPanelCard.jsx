import React from 'react';

export default function AssignFacultyPanelCard({ status = 'Pending', onAssign }) {
  return (
    <div className="card">
      <h3>Assign Faculty Panel</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onAssign}>Assign Panel</button>
    </div>
  );
}
