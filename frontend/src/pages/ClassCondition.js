import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ConditionCard from '../components/ConditionCard';

const ClassCondition = () => {
  const [current, setCurrent] = useState({ temp: 0, light: 0, humidity: 0 });
  const [desired, setDesired] = useState({ temp: 24, light: 80, humidity: 15 });

  useEffect(() => {
    fetch('http://<ESP32-IP>/sensors') // replace with your ESP32 IP address
      .then(res => res.json())
      .then(data => {
        setCurrent({
          temp: data.temperature,
          light: data.light,
          humidity: data.humidity
        });
      });
  }, []);

  const handleChange = () => {
    fetch('http://<ESP32-IP>/set', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(desired)
    });
  };

  return (
    <div className="dashboard">
      <Sidebar active={4} />
      <div className="main">
        <h2>Hi User, This is the condition of class Lecture 1</h2>
        <div className="cards">
          <ConditionCard title="Current Condition" data={current} />
          <ConditionCard title="Desired Condition" data={desired} />
        </div>
        <div className="actions">
          <button onClick={() => setDesired({ temp: 24, light: 80, humidity: 15 })}>Restore Default</button>
          <button onClick={handleChange}>Change</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCondition;
