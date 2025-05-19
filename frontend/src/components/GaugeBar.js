import React from 'react';

const GaugeBar = ({ label, value }) => {
  const height = Math.min(Math.max(value, 0), 100);
  return (
    <div className="gauge-bar">
      <div className="bar" style={{ height: `${height}%`, backgroundColor: '#fbbf24' }}></div>
      <div className="label">
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default GaugeBar;
