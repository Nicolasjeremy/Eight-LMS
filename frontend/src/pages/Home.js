import "./Home.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "../components/Sidebar"; // tambahkan import Sidebar

function Home() {
  const featuredCourses = Array(6).fill({
    title: "Fisika Dasar",
    code: "IIK211",
    instructor: "Albert Einstein",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-j7n5bYimZjjfUkz61Wrk8WjN2xYjRo.png",
  });

  // Generate calendar data
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2; // Offset to start from previous month
    return {
      day: day <= 0 ? day + 31 : day > 31 ? day - 31 : day,
      isCurrentMonth: day > 0 && day <= 31,
      isToday: day === 18,
    };
  });

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <div className="welcome-banner">
          <h2>Welcome user,</h2>
          <h3>Try exploring Eight to study more efficiently</h3>
        </div>

        <div className="home-content">
          <div className="featured-courses">
            {featuredCourses.slice(0, 6).map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-image">
                  <img
                    src="/placeholder.svg?height=100&width=150"
                    alt="Course"
                  />
                </div>
                <div className="course-info">
                  <div className="course-title">{course.title}</div>
                  <div className="course-code">{course.code}</div>
                  <div className="course-instructor">{course.instructor}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-widgets">
            <div className="calendar-widget">
              <div className="calendar-header">
                <ChevronLeft className="calendar-nav" />
                <h3>May 2023</h3>
                <ChevronRight className="calendar-nav" />
              </div>
              <div className="calendar-days-header">
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
                <div>Su</div>
              </div>
              <div className="calendar-grid">
                {calendarDays.map((day, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${
                      !day.isCurrentMonth ? "other-month" : ""
                    } ${day.isToday ? "today" : ""}`}
                  >
                    {day.day}
                  </div>
                ))}
              </div>
            </div>

            <div className="progress-widget">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "75%" }}></div>
              </div>
              <div className="progress-label">75%</div>
              <div className="progress-stats">
                <div className="stat-row">
                  <div className="stat-label">Total Assignments:</div>
                  <div className="stat-value">100</div>
                </div>
                <div className="stat-row">
                  <div className="stat-label">Finished Assignments:</div>
                  <div className="stat-value">75</div>
                </div>
                <div className="stat-row">
                  <div className="stat-label">Unfinished Assignments:</div>
                  <div className="stat-value">20</div>
                </div>
                <div className="stat-row">
                  <div className="stat-label">Late Assignments:</div>
                  <div className="stat-value">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
