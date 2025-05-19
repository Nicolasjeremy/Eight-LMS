import React from 'react';
import GaugeBar from './GaugeBar';

const ConditionCard = ({ title, data }) => (
  <div className="condition-card">
    <h3>{title}</h3>
    <div className="gauge-group">
      <GaugeBar label="Temperature" value={data.temp} />
      <GaugeBar label="Lights" value={data.light} />
      <GaugeBar label="Humidity" value={data.humidity} />
    </div>
  </div>
);

export default ConditionCard;
