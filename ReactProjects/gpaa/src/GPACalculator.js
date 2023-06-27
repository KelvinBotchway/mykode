import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./style.css";

const GPACalculator = () => {
  const [semesters, setSemesters] = useState([]);

  const addSemester = () => {
    const newSemester = {
      courses: [{ grade: "", hours: 0 }],
      gpa: 0,
    };
    setSemesters([...semesters, newSemester]);
  };

  const handleCourseChange = (semesterIndex, courseIndex, field, value) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses[courseIndex][field] = value;
    setSemesters(updatedSemesters);
  };

  const addCourse = (semesterIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses.push({ grade: "", hours: 0 });
    setSemesters(updatedSemesters);
  };

  const removeCourse = (semesterIndex, courseIndex) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].courses.splice(courseIndex, 1);
    setSemesters(updatedSemesters);
  };

  const calculateGPA = (semesterIndex) => {
    const semester = semesters[semesterIndex];
    let totalPoints = 0;
    let totalHours = 0;

    semester.courses.forEach((course) => {
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

    const gpa = totalPoints / totalHours;

    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].gpa = gpa;
    setSemesters(updatedSemesters);
  };

  return (
    <Container className="gpa-body">
      <h1>GPA Calculator</h1>
      {semesters.map((semester, semesterIndex) => (
        <div key={semesterIndex} className="semester">
          <h2>Semester {semesterIndex + 1}</h2>
          <Form>
            {semester.courses.map((course, courseIndex) => (
              <div className="course-container" key={courseIndex}>
                <Form.Group>
                  <Form.Label>Grade for Course {courseIndex + 1}</Form.Label>
                  <Form.Control
                    as="select"
                    value={course.grade}
                    onChange={(e) =>
                      handleCourseChange(
                        semesterIndex,
                        courseIndex,
                        "grade",
                        e.target.value
                      )
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
                  <Form.Label>
                    Credit Hours for Course {courseIndex + 1}
                  </Form.Label>
                  <Form.Control
                    as="input"
                    type="number"
                    value={course.hours}
                    onChange={(e) =>
                      handleCourseChange(
                        semesterIndex,
                        courseIndex,
                        "hours",
                        e.target.value
                      )
                    }
                  />
                </Form.Group>
                {courseIndex > 0 && (
                  <Button
                    variant="danger"
                    onClick={() => removeCourse(semesterIndex, courseIndex)}
                    className="removecourse"
                  >
                    Remove Course
                  </Button>
                )}
              </div>
            ))}
            <Button
              className="addcourse"
              variant="primary"
              onClick={() => addCourse(semesterIndex)}
            >
              Add Course
            </Button>{" "}
            <Button
              className="calculate"
              variant="success"
              onClick={() => calculateGPA(semesterIndex)}
            >
              Calculate GPA
            </Button>
            {semester.gpa !== 0 && (
              <p>
                Your GPA for Semester {semesterIndex + 1} is:{" "}
                {semester.gpa.toFixed(2)}
              </p>
            )}
          </Form>
        </div>
      ))}
      <Button className="addsemester" variant="primary" onClick={addSemester}>
        Add Semester
      </Button>
    </Container>
  );
};

export default GPACalculator;
