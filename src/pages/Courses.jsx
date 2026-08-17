import React from "react";

const courses = [
  {
    id: 1,
    name: "Computer Science",
    duration: "4 Years",
    description:
      "Learn programming, software development, databases, and modern technologies.",
  },
  {
    id: 2,
    name: "Information Technology",
    duration: "4 Years",
    description:
      "Develop skills in web development, networking, cloud computing, and IT systems.",
  },
  {
    id: 3,
    name: "Electrical Engineering",
    duration: "4 Years",
    description:
      "Study electrical systems, electronics, power systems, and engineering fundamentals.",
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    duration: "4 Years",
    description:
      "Learn design, manufacturing, thermodynamics, and mechanical engineering concepts.",
  },
  {
    id: 5,
    name: "Business Administration",
    duration: "3 Years",
    description:
      "Build knowledge in management, finance, marketing, and business operations.",
  },
  {
    id: 6,
    name: "Data Science",
    duration: "3 Years",
    description:
      "Learn data analysis, statistics, visualization, and machine learning fundamentals.",
  },
];

function Courses() {
  return (
    <div className="page courses-page">
      <div className="page-header">
        <h1>Our Courses</h1>
        <p>
          Explore our academic programs and choose the right course for your
          career.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
           

            <h2>{course.name}</h2>

            <span className="course-duration">
              Duration: {course.duration}
            </span>

            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;