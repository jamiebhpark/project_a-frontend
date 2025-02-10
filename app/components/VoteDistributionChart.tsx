// components/VoteDistributionChart.tsx
"use client";
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VoteDistributionChartProps {
  up_votes: number;
  down_votes: number;
}

const COLORS = ['#82ca9d', '#ff7300'];

const VoteDistributionChart: React.FC<VoteDistributionChartProps> = ({ up_votes, down_votes }) => {
  const data = [
    { name: 'Up Vote', value: up_votes },
    { name: 'Down Vote', value: down_votes },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <PieChart>
          <Pie 
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VoteDistributionChart;
