import { useNavigate } from "react-router-dom";
import TestPage from "../pages/TestPage";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const menu = [
    { label: "Home Page", path: "/" },
    { label: "Course Page", path: "/course" },
    { label: "Assignment Page", path: "/assignment" },
    { label: "Attendance Page", path: "/attendance" },
    { label: "Class Condition", path: "/test" },
    { label: "Test Page", path: TestPage },
  ];

  const handleClick = (item) => {
    console.log(`Navigating to: ${item.label} (${item.path})`);
    navigate(item.path);
  };

  return (
    <div className="sidebar">
      <div className="logo">∞</div>
      {menu.map((item, index) => (
        <div
          key={index}
          className={`sidebar-item ${active === index ? "active" : ""}`}
          onClick={() => handleClick(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
