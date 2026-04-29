import React from 'react';

export default function CreateSeminarScheduleCard({ status = 'Pending', onCreate }) {
  return (
    <div className="card">
      <h3>Create Seminar Schedule</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onCreate}>Create Schedule</button>
    </div>
  );
}
