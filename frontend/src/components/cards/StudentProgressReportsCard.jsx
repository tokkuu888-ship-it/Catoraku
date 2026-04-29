import React from 'react';

export default function StudentProgressReportsCard({ reports = [] }) {
  return (
    <div className="card">
      <h3>Student Progress Reports (Quick View)</h3>
      <ul>
        {reports.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
