import React from 'react';
import MyUpcomingSeminarCard from '../components/cards/MyUpcomingSeminarCard';
import SubmitProgressReportCard from '../components/cards/SubmitProgressReportCard';
import MyProgressTimelineCard from '../components/cards/MyProgressTimelineCard';
import FeedbackReceivedCard from '../components/cards/FeedbackReceivedCard';
import NextMilestonesCard from '../components/cards/NextMilestonesCard';

export default function StudentDashboard() {
  return (
    <div>
      <h1>PhD Student Dashboard</h1>
      <div className="dashboard-cards">
        <MyUpcomingSeminarCard />
        <SubmitProgressReportCard />
        <MyProgressTimelineCard />
        <FeedbackReceivedCard />
        <NextMilestonesCard />
      </div>
    </div>
  );
}
