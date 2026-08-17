import { Link } from "react-router-dom";

function StudentCard({ student }) {

  return (
    <div className="student-card">

      <div className="student-avatar">
        {student.name.charAt(0)}
      </div>

      <div className="student-card-content">

        <h3>{student.name}</h3>

        <p>
          <strong>Email : </strong> {student.email}
        </p>

        <p>
          <strong>Phone : </strong> {student.phone}
        </p>

        <p>
          <strong>Location : </strong> {student.address?.city || "Not available"}
        </p>

        <p>
          <strong>Company : </strong> {student.company?.name || "Student"}
        </p>

        <Link
          to={`/students/${student.id}`}
          className="view-btn"
        >
          View Details →
        </Link>

      </div>

    </div>
  );
}

export default StudentCard;