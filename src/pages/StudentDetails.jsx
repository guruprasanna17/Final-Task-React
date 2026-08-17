import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  useEffect(() => {

    const fetchStudent = async () => {

      try {

        setLoading(true);
        setError("");

        const response =
          await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );

        if (!response.ok) {
          throw new Error(
            "Student not found"
          );
        }

        const data =
          await response.json();

        setStudent(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }
    };

    fetchStudent();

  }, [id]);


  if (loading) {

    return (
      <div className="loading-container">

        <div className="spinner"></div>

        <h3>
          Loading student details...
        </h3>

      </div>
    );
  }


  if (error) {

    return (
      <div className="error-box">

        <div className="error-icon">
          ⚠️
        </div>

        <h3>
          Student Not Found
        </h3>

        <p>{error}</p>

        <button
          className="primary-btn"
          onClick={() =>
            navigate("/students")
          }
        >
          ← Back to Students
        </button>

      </div>
    );
  }


  return (
    <div className="details-container">

      <button
        className="back-btn"
        onClick={() =>
          navigate("/students")
        }
      >
        ← Back to Students
      </button>


      <div className="profile-card">

        <div className="profile-top">

          <div className="profile-avatar">
            {student.name.charAt(0)}
          </div>

          <div>

            <span className="profile-label">
              STUDENT PROFILE
            </span>

            <h1>
              {student.name}
            </h1>

            <p>
              @{student.username}
            </p>

          </div>

        </div>


        <div className="details-grid">

          <div className="detail-item">

            <span>
               Email
            </span>

            <strong>
              {student.email}
            </strong>

          </div>


          <div className="detail-item">

            <span>
               Phone
            </span>

            <strong>
              {student.phone}
            </strong>

          </div>


          <div className="detail-item">

            <span>
               Website
            </span>

            <strong>
              {student.website}
            </strong>

          </div>


          <div className="detail-item">

            <span>
               City
            </span>

            <strong>
              {student.address?.city}
            </strong>

          </div>


          <div className="detail-item">

            <span>
               Company
            </span>

            <strong>
              {student.company?.name}
            </strong>

          </div>


          <div className="detail-item">

            <span>
               Business
            </span>

            <strong>
              {student.company?.bs}
            </strong>

          </div>

        </div>


        <div className="address-box">

          <h3>
            Address
          </h3>

          <p>
            {student.address?.street},{" "}
            {student.address?.suite},{" "}
            {student.address?.city}
          </p>

          <p>
            ZIP Code:{" "}
            {student.address?.zipcode}
          </p>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;