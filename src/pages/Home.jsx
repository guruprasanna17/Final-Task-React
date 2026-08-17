import { Link } from "react-router-dom";

function Home() {

  return (
    <div>

      
      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
             STUDENT MANAGEMENT SYSTEM
          </span>

          <h1>
            Manage Students
            <span> Smarter & Faster</span>
          </h1>

          <p>
            EduTrack is a modern student management
            application that helps you organize,
            search and manage student information
            easily.
          </p>

          <div className="hero-buttons">

            <Link
              to="/students"
              className="primary-btn"
            >
              View Students →
            </Link>

            <Link
              to="/students/add"
              className="secondary-btn"
            >
              + Add Student
            </Link>

          </div>

        </div>

        

      </section>


      {/* Statistics */}
      <section className="stats">

        <div className="stat-card">
          
          <h2>10+</h2>

          <p>Students</p>
        </div>


        <div className="stat-card">
          

          <h2>5+</h2>

          <p>Departments</p>
        </div>


        <div className="stat-card">
          

          <h2>Fast</h2>

          <p>Performance</p>
        </div>


        <div className="stat-card">
          

          <h2>100%</h2>

          <p>Responsive</p>
        </div>

      </section>


      {/* Features */}
      <section className="section">

        <div className="section-heading">

          <span>FEATURES</span>

          <h2>
            Everything You Need
          </h2>

          <p>
            A complete solution for managing
            student information.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            

            <h3>
              Quick Search
            </h3>

            <p>
              Quickly find students by name
              or email using URL-based search.
            </p>

          </div>


          <div className="feature-card">

            
            <h3>
              Student Profiles
            </h3>

            <p>
              View complete student information
              through dynamic profile pages.
            </p>

          </div>


          <div className="feature-card">

            
            <h3>
              Responsive Design
            </h3>

            <p>
              Designed for desktop, tablet
              and mobile devices.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;