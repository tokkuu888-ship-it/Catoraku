import React from 'react';
import TodaysSessionsCard from '../components/cards/TodaysSessionsCard';
import GenerateMeetingLinksCard from '../components/cards/GenerateMeetingLinksCard';
import LatexCompatibilityCheckCard from '../components/cards/LatexCompatibilityCheckCard';
import HybridSessionStatusCard from '../components/cards/HybridSessionStatusCard';

export default function TechModeratorDashboard() {
  return (
    <div>
      <h1>Technical Moderator Dashboard</h1>
      <div className="dashboard-cards">
        <TodaysSessionsCard />
        <GenerateMeetingLinksCard />
        <LatexCompatibilityCheckCard />
        <HybridSessionStatusCard />
      </div>
    </div>
  );
}
