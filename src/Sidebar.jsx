import React, { useState, useEffect } from "react";
import axios from "axios";

function Sidebar() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSelectedSemester] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCourse || !year || !semester) {
      console.warn("Please select all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/instances", {
        courseId: selectedCourse,
        year,
        semester,
      });

      console.log("Course instance created successfully:", response.data);
    } catch (error) {
      console.error("Error creating course instance:", error);
    }

    setSelectedCourse("");
    setYear("");
    setSelectedSemester("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="courseSelect">Select Course:</label>
      <select
        id="courseSelect"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name} // Assuming your course data has a `name` property
          </option>
        ))}
      </select>

      <label htmlFor="yearSelect">Year:</label>
      <input
        type="number"
        id="yearSelect"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label htmlFor="semesterSelect">Semester:</label>
      <select
        id="semesterSelect"
        value={semester}
        onChange={(e) => setSelectedSemester(e.target.value)}
      >
        <option value="">Select Semester</option>
        <option value="1">1st Semester</option>
        <option value="2">2nd Semester</option>
      </select>

      <button className="btn btn-outline-light " type="submit">
        Add Instance
      </button>
    </form>
  );
}

export default Sidebar;
