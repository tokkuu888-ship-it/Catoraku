import React from 'react';

export default function GenerateMeetingLinksCard({ status = 'Ready', onGenerate }) {
  return (
    <div className="card">
      <h3>Generate Meeting Links</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onGenerate}>Generate Links</button>
    </div>
  );
}
