import React from 'react';

export default function PendingScheduleApprovalCard({ count = 3, status = 'Urgent', onReview }) {
  return (
    <div className="card">
      <h3>Pending Schedule Approvals</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <p>Count: {count}</p>
      <button onClick={onReview}>Review Now</button>
    </div>
  );
}
