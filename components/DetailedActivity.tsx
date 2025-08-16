import React from 'react';
import { CHART_CONFIG, CHART_TITLES, TOOLTIP_LABELS } from '@/config/dashboardConfig';
import {HeatmapData} from "@/types/dashboard";

interface DetailedActivityProps {
    heatmapData: HeatmapData[][];
    HEATMAP_COLORS: string[];
    formatTime: (seconds: number) => string;
}

const DetailedActivity: React.FC<DetailedActivityProps> = ({ 
    heatmapData, 
    HEATMAP_COLORS, 
    formatTime 
}) => {
    const getColorIndex = (value: number) => {
        if (value === 0) return 0;
        if (value < 3600) return 1; // < 1 hour
        if (value < 7200) return 2; // < 2 hours
        if (value < 14400) return 3; // < 4 hours
        return 4; // >= 4 hours
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Detaillierte Aktivität</h2>
            <div className="space-y-6">
                {/* GitHub-style Activity Heatmap */}
                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-4">{CHART_TITLES.DAILY_ACTIVITY}</h4>
                    <div className="w-full">
                        <div className="w-full">
                            {/* GitHub-style grid layout */}
                            <div className="flex items-start space-x-2 mb-2">
                                {/* Month labels on top */}
                                <div className="w-8"></div> {/* Spacer for day labels */}
                                <div className="flex-1 flex space-x-1">
                                    {heatmapData.map((week, weekIndex) => {
                                        const firstDay = week[0];
                                        const isFirstWeekOfMonth = weekIndex === 0 || 
                                            (firstDay && new Date(firstDay.date).getDate() <= 7);
                                        
                                        return (
                                            <div 
                                                key={weekIndex} 
                                                className={`text-xs text-gray-500 flex-1 text-center ${isFirstWeekOfMonth ? 'visible' : 'invisible'}`}
                                            >
                                                {firstDay && isFirstWeekOfMonth ? 
                                                    new Date(firstDay.date).toLocaleDateString('de-DE', { month: 'short' }) : 
                                                    ''
                                                }
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            
                            {/* Main heatmap grid */}
                            <div className="flex items-start space-x-2">
                                {/* Day labels on the left */}
                                <div className="flex flex-col space-y-1 mr-2 w-8">
                                    {['Mo', 'Mi', 'Fr'].map(day => (
                                        <div key={day} className="h-6 text-xs text-gray-500 leading-6">
                                            {day}
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Contribution squares */}
                                <div className="flex-1 flex space-x-1">
                                    {heatmapData.map((week, weekIndex) => (
                                        <div key={weekIndex} className="flex-1 flex flex-col space-y-1">
                                            {week.map((day, dayIndex) => (
                                                <div
                                                    key={dayIndex}
                                                    className="w-full h-6 rounded-sm border border-gray-100"
                                                    style={{
                                                        backgroundColor: HEATMAP_COLORS[getColorIndex(day.value)]
                                                    }}
                                                    title={`${day.day}, ${day.month} ${day.year}: ${formatTime(day.value)}`}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* GitHub-style legend */}
                            <div className="mt-4 flex items-center justify-end space-x-1">
                                <span className="text-xs text-gray-500 mr-2">Weniger</span>
                                {HEATMAP_COLORS.map((color, index) => (
                                    <div
                                        key={index}
                                        className="w-4 h-4 rounded-sm border border-gray-100"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                                <span className="text-xs text-gray-500 ml-2">Mehr</span>
                            </div>
                            
                            {/* Time legend */}
                            <div className="mt-2 flex items-center justify-end space-x-6 text-xs text-gray-500">
                                <span>0h</span>
                                <span>&lt;1h</span>
                                <span>&lt;2h</span>
                                <span>&lt;4h</span>
                                <span>≥4h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedActivity; 