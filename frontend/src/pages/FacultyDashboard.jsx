import React from 'react';
import AssignedSessionsCard from '../components/cards/AssignedSessionsCard';
import StudentProgressReportsCard from '../components/cards/StudentProgressReportsCard';
import EvaluationPanelCard from '../components/cards/EvaluationPanelCard';
import SubmitFeedbackCard from '../components/cards/SubmitFeedbackCard';

export default function FacultyDashboard() {
  return (
    <div>
      <h1>Faculty Dashboard</h1>
      <div className="dashboard-cards">
        <AssignedSessionsCard />
        <StudentProgressReportsCard />
        <EvaluationPanelCard />
        <SubmitFeedbackCard />
      </div>
    </div>
  );
}
