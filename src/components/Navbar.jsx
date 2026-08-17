import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <NavLink
          to="/"
          className="logo"
        >
           EduTrack
        </NavLink>

        <nav className="nav-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Students
          </NavLink>

          <NavLink to="/courses"
          className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >Courses</NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

        <NavLink
          to="/students/add"
          className="add-nav-btn"
        >
          + Add Student
        </NavLink>

      </div>

    </header>
  );
}

export default Navbar;