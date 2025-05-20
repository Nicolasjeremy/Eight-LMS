import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClassCondition from "./pages/ClassCondition";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<div>Course Page</div>} />
        <Route path="/assignment" element={<div>Assignment Page</div>} />
        <Route path="/attendance" element={<div>Attendance Page</div>} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/class-condition" element={<ClassCondition />} />
      </Routes>
    </div>
  );
}

export default App;
