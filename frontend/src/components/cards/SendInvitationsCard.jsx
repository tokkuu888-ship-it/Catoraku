import React from 'react';

export default function SendInvitationsCard({ status = 'Ready', onSend }) {
  return (
    <div className="card">
      <h3>Send Invitations / Reminders</h3>
      <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
      <button onClick={onSend}>Send Invitations</button>
    </div>
  );
}
