import React from 'react';

export default function SubmitProgressReportCard({ status = 'Pending', onSubmit }) {
  return (
    <div className="card">
      <h3>Submit Progress Report</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onSubmit}>Upload Report</button>
    </div>
  );
}
