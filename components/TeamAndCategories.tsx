import React from 'react';
import {
    PieChart, Pie, Cell,
    BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
    ResponsiveContainer
} from 'recharts';
import {CHART_CONFIG, CHART_TITLES, TOOLTIP_LABELS} from '../config/dashboardConfig';

interface TeamAndCategoriesProps {
    pieData: Array<{ name: string; value: number }>;
    barData: Array<{ name: string; value: number }>;
    COLORS: string[];
}

const TeamAndCategories: React.FC<TeamAndCategoriesProps> = ({pieData, barData, COLORS}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Team & Kategorien</h2>
            <div className="grid grid-cols-1 gap-6">
                {/* Category Distribution */}
                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{CHART_TITLES.CATEGORY_DISTRIBUTION}</h4>
                    <ResponsiveContainer width="100%" height={CHART_CONFIG.HEIGHTS.MEDIUM}>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={pieData}
                                outerRadius={100}
                                label={({
                                            name,
                                            value
                                        }) => value !== undefined ? `${name}\n${value.toFixed(CHART_CONFIG.DECIMAL_PLACES)}h` : name}>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: number) => [`${value.toFixed(CHART_CONFIG.DECIMAL_PLACES)}h`, TOOLTIP_LABELS.HOURS]}/>
                            <Legend/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Team Activity */}
                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{CHART_TITLES.TEAM_ACTIVITY}</h4>
                    <ResponsiveContainer width="100%" height={CHART_CONFIG.HEIGHTS.MEDIUM}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip
                                formatter={(value: number) => [`${value.toFixed(CHART_CONFIG.DECIMAL_PLACES)}h`, TOOLTIP_LABELS.HOURS]}/>
                            <Legend/>
                            <Bar dataKey="value" fill="#8884d8"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default TeamAndCategories; 