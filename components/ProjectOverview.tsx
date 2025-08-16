import React from 'react';
import { CHART_CONFIG, KPI_LABELS } from '../config/dashboardConfig';
import { ProjectMetrics, Issue } from '@/types/dashboard';

interface ProjectOverviewProps {
    projectMetrics: ProjectMetrics;
    issues: Issue[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ projectMetrics, issues }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Projektübersicht</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Team Velocity */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">{KPI_LABELS.WEEKLY_PERFORMANCE}</h4>
                    <p className="text-2xl font-bold text-blue-900">
                        {projectMetrics.averageVelocity.toFixed(CHART_CONFIG.DECIMAL_PLACES)}h
                    </p>
                    <p className="text-sm text-blue-600 mt-1">
                        {projectMetrics.totalSprints} {KPI_LABELS.ACTIVE_WEEKS}
                    </p>
                </div>

                {/* Most Active Category */}
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-green-800 mb-2">{KPI_LABELS.MAIN_FOCUS}</h4>
                    {(() => {
                        const mainCategory = projectMetrics.categoryDistribution
                            .sort((a, b) => b.hours - a.hours)[0];
                        return (
                            <>
                                <p className="text-2xl font-bold text-green-900">
                                    {mainCategory.category}
                                </p>
                                <p className="text-sm text-green-600 mt-1">
                                    {mainCategory.hours.toFixed(CHART_CONFIG.DECIMAL_PLACES)}{KPI_LABELS.HOURS_PER_WEEK}
                                </p>
                            </>
                        );
                    })()}
                </div>

                {/* Average Issue Completion Time */}
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-purple-800 mb-2">{KPI_LABELS.ISSUE_COMPLETION_TIME}</h4>
                    {(() => {
                        const completedIssues = issues.filter(issue => issue.totalTimeSpent > 0);
                        const avgTime = completedIssues.length > 0 
                            ? completedIssues.reduce((sum, issue) => sum + issue.totalTimeSpent, 0) / completedIssues.length / 3600
                            : 0;
                        return (
                            <>
                                <p className="text-2xl font-bold text-purple-900">
                                    {avgTime.toFixed(CHART_CONFIG.DECIMAL_PLACES)}h
                                </p>
                                <p className="text-sm text-purple-600 mt-1">
                                    {completedIssues.length} {KPI_LABELS.COMPLETED_ISSUES}
                                </p>
                            </>
                        );
                    })()}
                </div>

                {/* Most Productive Week */}
                <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-orange-800 mb-2">{KPI_LABELS.MOST_ACTIVE_WEEK}</h4>
                    {(() => {
                        const mostProductiveWeek = [...projectMetrics.sprintData]
                            .sort((a, b) => b.totalHours - a.totalHours)[0];
                        return (
                            <>
                                <p className="text-2xl font-bold text-orange-900">
                                    {mostProductiveWeek.totalHours.toFixed(CHART_CONFIG.DECIMAL_PLACES)}h
                                </p>
                                <p className="text-sm text-orange-600 mt-1">
                                    {mostProductiveWeek.sprintStart} - {mostProductiveWeek.sprintEnd}
                                </p>
                            </>
                        );
                    })()}
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview; 