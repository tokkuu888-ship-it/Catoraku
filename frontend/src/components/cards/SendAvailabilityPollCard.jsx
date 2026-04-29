import React from 'react';

export default function SendAvailabilityPollCard({ status = 'Ready', onSend }) {
  return (
    <div className="card">
      <h3>Send Availability Poll</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onSend}>Send Poll</button>
    </div>
  );
}
