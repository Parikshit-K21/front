import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseForm() {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courses, setCourses] = useState([]); // Array to store fetched courses

  // Fetch courses on component mount (optional)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/courses"); // Replace with your API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []); // Empty dependency array ensures it runs only once

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/courses", {
        courseTitle,
        courseCode,
        courseDescription,
      });

      console.log("Course created successfully:", response.data);
      // Optionally, update the courses state after successful creation
      // setCourses([...courses, response.data]); // Add newly created course to state
    } catch (error) {
      console.error("Error creating course:", error);
    }

    // Clear form fields after submission (optional)
    setCourseTitle("");
    setCourseCode("");
    setCourseDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="courseTitle">Course Title:</label>
      <input
        type="text"
        id="courseTitle"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />

      <label htmlFor="courseCode">Course Code:</label>
      <input
        type="text"
        id="courseCode"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
      />

      <label htmlFor="courseDescription">Course Description:</label>
      <textarea
        id="courseDescription"
        value={courseDescription}
        onChange={(e) => setCourseDescription(e.target.value)}
      />

      <button className="btn btn-outline-light " type="submit">
        Add Course
      </button>
    </form>
  );
}

export default CourseForm;
