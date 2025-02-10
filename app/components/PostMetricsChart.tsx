// components/PostMetricsChart.tsx
"use client";
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  time: string; // 예: "09:00"
  views: number;
  up_votes: number;
  down_votes: number;
}

interface PostMetricsChartProps {
  data: DataPoint[];
}

const PostMetricsChart: React.FC<PostMetricsChartProps> = ({ data }) => {
  // 각 데이터 포인트에 대해 votes를 계산
  const computedData = data.map(point => ({
    ...point,
    votes: point.up_votes + point.down_votes,
  }));

  return (
    <div className="w-full h-64 bg-white p-4 rounded">
      <ResponsiveContainer>
        <LineChart data={computedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip contentStyle={{ backgroundColor: "#fff", borderColor: "#ccc", color: "#000" }} />
          <Legend wrapperStyle={{ color: "#333" }} />
          <Line type="monotone" dataKey="views" stroke="#8884d8" name="Views" />
          <Line type="monotone" dataKey="votes" stroke="#82ca9d" name="Votes" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PostMetricsChart;
