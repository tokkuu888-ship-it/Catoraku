import React from 'react';

export default function EvaluationPanelCard({ onEvaluate }) {
  return (
    <div className="card">
      <h3>Evaluation Panel Interface</h3>
      <button onClick={onEvaluate}>Open Evaluation</button>
    </div>
  );
}
