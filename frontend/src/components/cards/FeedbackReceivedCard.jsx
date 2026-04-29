import React from 'react';

export default function FeedbackReceivedCard({ feedback = [] }) {
  return (
    <div className="card">
      <h3>Feedback Received</h3>
      <ul>
        {feedback.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}
