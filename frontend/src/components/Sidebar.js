import React from 'react';
// import './Sidebar.css';

const Sidebar = ({ active }) => {
  const menu = ['Home Page', 'Course Page', 'Assignment Page', 'Attendance Page', 'Class Condition'];
  return (
    <div className="sidebar">
      <div className="logo">∞</div>
      {menu.map((item, index) => (
        <div key={index} className={`sidebar-item ${active === index ? 'active' : ''}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
