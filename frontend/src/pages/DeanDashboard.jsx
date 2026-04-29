import React from 'react';
import PendingScheduleApprovalCard from '../components/cards/PendingScheduleApprovalCard';
import UpcomingSeminarWindowsCard from '../components/cards/UpcomingSeminarWindowsCard';
import ProgressSummaryCard from '../components/cards/ProgressSummaryCard';
import AtRiskStudentsCard from '../components/cards/AtRiskStudentsCard';

export default function DeanDashboard() {
  return (
    <div>
      <h1>Dean Dashboard</h1>
      <div className="dashboard-cards">
        <UpcomingSeminarWindowsCard />
        <PendingScheduleApprovalCard />
        <ProgressSummaryCard />
        <AtRiskStudentsCard />
      </div>
    </div>
  );
}
