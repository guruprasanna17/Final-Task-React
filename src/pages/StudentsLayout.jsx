import {
  NavLink,
  Outlet,
} from "react-router-dom";

function StudentsLayout() {

  return (
    <div className="page">

      <div className="students-header">

        <div>

          <span className="page-label">
            STUDENT MANAGEMENT
          </span>

          <h1>Students</h1>

          <p>
            View, search and manage
            student information.
          </p>

        </div>

        <NavLink
          to="/students/add"
          className="primary-btn"
        >
          + Add Student
        </NavLink>

      </div>


      {/* Nested Navigation */}
      <div className="student-tabs">

        <NavLink
          to="/students"
          end
          className={({ isActive }) =>
            isActive
              ? "student-tab active"
              : "student-tab"
          }
        >
          All Students
        </NavLink>

        <NavLink
          to="/students/add"
          className={({ isActive }) =>
            isActive
              ? "student-tab active"
              : "student-tab"
          }
        >
          Add Student
        </NavLink>

      </div>


      {/* Child Route */}
      <Outlet />

    </div>
  );
}

export default StudentsLayout;