import React from 'react';

export default function AtRiskStudentsCard({ students = [] }) {
  return (
    <div className="card">
      <h3>At-Risk Students</h3>
      <ul>
        {students.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
