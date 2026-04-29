import React from 'react';

export default function UpcomingSeminarWindowsCard({ windows = [] }) {
  return (
    <div className="card">
      <h3>Upcoming Seminar Windows</h3>
      <ul>
        {windows.map((w, i) => <li key={i}>{w}</li>)}
      </ul>
    </div>
  );
}
