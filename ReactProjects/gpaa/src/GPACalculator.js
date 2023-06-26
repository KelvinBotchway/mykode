import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./style.css";

const GPACalculator = () => {
  const [courses, setCourses] = useState([]);
  const [gpa, setGPA] = useState(0);

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: "", hours: 0 }]);
  };

  const removeCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalHours = 0;

    courses.forEach((course) => {
      const grade = course.grade.toUpperCase();
      const hours = parseInt(course.hours, 10);

      switch (grade) {
        case "A":
          totalPoints += hours * 4;
          break;
        case "B+":
          totalPoints += hours * 3.5;
          break;
        case "B":
          totalPoints += hours * 3;
          break;
        case "C+":
          totalPoints += hours * 2.5;
          break;
        case "C":
          totalPoints += hours * 2;
          break;
        case "D+":
          totalPoints += hours * 1.5;
          break;
        case "D":
          totalPoints += hours * 1;
          break;
        case "E":
          totalPoints += hours * 0.5;
          break;
        default:
          totalPoints += hours * 0;
          break;
      }

      totalHours += hours;
    });

    setGPA(totalPoints / totalHours);
  };

  return (
    <Container className="gpa-body">
      <h1>GPA Calculator</h1>
      <Form>
        {courses.map((course, index) => (
          <div className="course-container" key={index}>
            <Form.Group>
              <Form.Label>Grade for Course {index + 1}</Form.Label>
              <Form.Control
                as="select"
                value={course.grade}
                onChange={(e) =>
                  handleCourseChange(index, "grade", e.target.value)
                }
              >
                <option value="">Select Grade</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Credit Hours for Course {index + 1}</Form.Label>
              <Form.Control
                as="input"
                type="number"
                value={course.hours}
                onChange={(e) =>
                  handleCourseChange(index, "hours", e.target.value)
                }
              />
            </Form.Group>
          </div>
        ))}
        <div className="add-remove-buttons">
          <Button className="addcourse" variant="primary" onClick={addCourse}>
            Add Course
          </Button>{" "}
          {courses.length > 0 && (
            <Button
              variant="danger"
              onClick={() => removeCourse(courses.length - 1)}
              className="removecourse"
            >
              Remove Course
            </Button>
          )}
        </div>
        <Button
          className="calculate"
          variant="success"
          onClick={calculateGPA}
        >
          Calculate GPA
        </Button>
        {gpa !== 0 && <p>Your GPA is: {gpa.toFixed(2)}</p>}
      </Form>
    </Container>
  );
};

export default GPACalculator;
