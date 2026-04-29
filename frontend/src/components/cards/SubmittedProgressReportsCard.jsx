import React from 'react';

export default function SubmittedProgressReportsCard({ reports = [] }) {
  return (
    <div className="card">
      <h3>Submitted Progress Reports</h3>
      <ul>
        {reports.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
