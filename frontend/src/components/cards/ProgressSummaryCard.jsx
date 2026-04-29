import React from 'react';

export default function ProgressSummaryCard({ summary = {} }) {
  return (
    <div className="card">
      <h3>Overall PhD Progress Summary</h3>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
}
