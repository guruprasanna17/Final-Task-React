function About() {

  return (
    <div className="page">

      <section className="about-hero">

        <span className="page-label">
          ABOUT EDUTRACK
        </span>

        <h1>
          Simple. Modern. Powerful.
        </h1>

        <p>
          EduTrack is a modern Student Management
          System built using React to demonstrate
          real-world frontend development concepts.
        </p>

      </section>


      <section className="about-grid">

        <div className="about-card">

          <div className="feature-icon">
            
          </div>

          <h2>
            Our Goal
          </h2>

          <p>
            Our goal is to make student information
            easy to access, search and manage through
            a simple and user-friendly interface.
          </p>

        </div>


        <div className="about-card">

          <div className="feature-icon">
            
          </div>

          <h2>
            Built with React
          </h2>

          <p>
            This application demonstrates React
            components, hooks, routing, API integration,
            forms, custom hooks and state management.
          </p>

        </div>


        <div className="about-card">

          <div className="feature-icon">
            
          </div>

          <h2>
            Responsive Design
          </h2>

          <p>
            The application provides a consistent
            experience across desktop, tablet
            and mobile devices.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;