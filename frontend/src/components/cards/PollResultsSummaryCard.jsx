import React from 'react';

export default function PollResultsSummaryCard({ results = [] }) {
  return (
    <div className="card">
      <h3>Poll Results Summary</h3>
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
