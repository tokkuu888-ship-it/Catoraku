import React from 'react';

export default function HybridSessionStatusCard({ status = 'Active' }) {
  return (
    <div className="card">
      <h3>Hybrid Session Status</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
    </div>
  );
}
