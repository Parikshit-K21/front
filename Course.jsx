import React, { useState } from "react";

function CourseForm() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { title, code, desc };
    setCourses([...courses, newCourse]);
    setTitle("");
    setCode("");
    setDesc("");
  };

  return (
    <div>
      <h2>Course Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Code:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
        <label>Description:</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        <br />
        <button type="submit">Add Course</button>
      </form>
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.code}</td>
              <td>{course.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseForm;
