import React, { useState } from "react";
import axios from "axios";

function Sidebar() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSelectedSemester] = useState("");

  const handleSubmit = () => {
    console.log("Selected course:", selectedCourse);
    console.log("Year:", year);
    console.log("Semester:", semester);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="courseSelect">Select Course:</label>
      <select
        id="courseSelect"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        {}
        <option value="">Select Course</option>
        <option value="course1">Course 1</option>
        <option value="course2">Course 2</option>
        {/* ... more options */}
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
        {/* Add more semester options as needed */}
      </select>

      <button className="btn btn-outline-light " type="submit">
        Add Instance
      </button>
    </form>
  );
}

export default Sidebar;
