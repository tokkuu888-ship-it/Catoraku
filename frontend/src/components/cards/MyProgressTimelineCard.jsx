import React from 'react';

export default function MyProgressTimelineCard({ timeline = [] }) {
  return (
    <div className="card">
      <h3>My Progress Timeline</h3>
      <ul>
        {timeline.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
