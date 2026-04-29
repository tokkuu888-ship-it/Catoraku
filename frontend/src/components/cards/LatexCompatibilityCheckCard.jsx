import React from 'react';

export default function LatexCompatibilityCheckCard({ status = 'Pending', onCheck }) {
  return (
    <div className="card">
      <h3>System/LaTeX Compatibility Check</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onCheck}>Run Check</button>
    </div>
  );
}
