import React from 'react';
import { PieChart, Pie, Tooltip,} from 'recharts';
import Records from './records.json';
import './ClothesCard.css';

const ClothesCard = () => {
  // Count frequency of each clothing type
  const data = Records.payload.reduce((acc, item) => {
    acc[item.clothe] = (acc[item.clothe] || 0) + 1;
    return acc;
  }, {});

  // Convert to array format for PieChart
  const chartData = Object.keys(data).map(name => ({
    name,
    value: data[name]
  }));

  return (

    <PieChart className='ClothesCard' width={350} height={200}>
      <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
      <Tooltip/>
    </PieChart>
  
  );
};

export default ClothesCard;