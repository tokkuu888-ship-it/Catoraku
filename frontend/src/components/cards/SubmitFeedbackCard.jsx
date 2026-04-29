import React from 'react';

export default function SubmitFeedbackCard({ status = 'Pending', onSubmit }) {
  return (
    <div className="card">
      <h3>Submit Feedback (Sandwich Method)</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onSubmit}>Submit Feedback</button>
    </div>
  );
}
