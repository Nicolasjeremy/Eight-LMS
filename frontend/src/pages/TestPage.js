import React, { useState, useEffect } from "react";
import ConditionCard from "../components/ConditionCard";
import Sidebar from "../components/Sidebar";

const TestPage = () => {
  const [currentData, setCurrentData] = useState({
    temp: 28,
    light: 90,
    humidity: 12,
  });
  const [desiredData, setDesiredData] = useState({
    temp: 24,
    light: 80,
    humidity: 15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData({
        temp: Math.floor(Math.random() * 40),
        light: Math.floor(Math.random() * 100),
        humidity: Math.floor(Math.random() * 100),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar active={5} />
      <div className="main" style={{ padding: "20px" }}>
        <h2>Dummy Test: Class Condition Gauges</h2>
        <div className="cards">
          <ConditionCard title="Current Condition" data={currentData} />
          <ConditionCard title="Desired Condition" data={desiredData} />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
