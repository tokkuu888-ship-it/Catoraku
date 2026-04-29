import React from 'react';
import SendAvailabilityPollCard from '../components/cards/SendAvailabilityPollCard';
import PollResultsSummaryCard from '../components/cards/PollResultsSummaryCard';
import CreateSeminarScheduleCard from '../components/cards/CreateSeminarScheduleCard';
import AssignFacultyPanelCard from '../components/cards/AssignFacultyPanelCard';
import SubmittedProgressReportsCard from '../components/cards/SubmittedProgressReportsCard';
import SendInvitationsCard from '../components/cards/SendInvitationsCard';

export default function CoordinatorDashboard() {
  return (
    <div>
      <h1>Coordinator Dashboard</h1>
      <div className="dashboard-cards">
        <SendAvailabilityPollCard />
        <PollResultsSummaryCard />
        <CreateSeminarScheduleCard />
        <AssignFacultyPanelCard />
        <SubmittedProgressReportsCard />
        <SendInvitationsCard />
      </div>
    </div>
  );
}
