import React from 'react';

export default function MyUpcomingSeminarCard({ seminar = {} }) {
  return (
    <div className="card">
      <h3>My Upcoming Seminar</h3>
      <pre>{JSON.stringify(seminar, null, 2)}</pre>
    </div>
  );
}
