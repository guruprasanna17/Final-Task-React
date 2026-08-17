import {
  useSearchParams,
} from "react-router-dom";

import useFetch from "../hooks/useFetch";

import StudentCard from "../components/StudentCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { useStudents } from "../Context/StudentContext";

import {
  searchStudents,
} from "../utils/studentUtils";

function AllStudents() {

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const search =
    searchParams.get("search") || "";


  const {
    data: apiStudents,
    loading,
    error,
    refetch,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );


  const {
    students: localStudents,
  } = useStudents();


  const allStudents = [
    ...apiStudents,
    ...localStudents,
  ];


  const filteredStudents =
    searchStudents(
      allStudents,
      search
    );


  const handleSearch = (event) => {

    const value =
      event.target.value;

    if (value.trim()) {

      setSearchParams({
        search: value,
      });

    } else {

      setSearchParams({});

    }
  };


  return (
    <div>

      {/* Search */}
      <div className="search-section">

        <div className="search-box">

          

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={handleSearch}
          />

        </div>

        <div className="student-count">

          {loading
            ? "Loading..."
            : `${filteredStudents.length} Students Found`
          }

        </div>

      </div>


      {/* Loading */}
      {loading && <Loading />}


      {/* Error */}
      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={refetch}
        />
      )}


      {/* Student Cards */}
      {!loading &&
        !error &&
        filteredStudents.length > 0 && (

          <div className="students-grid">

            {filteredStudents.map(
              (student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              )
            )}

          </div>
        )}


      {/* No Data */}
      {!loading &&
        !error &&
        filteredStudents.length === 0 && (

          <div className="empty-state">

            <div></div>

            <h3>
              No students found
            </h3>

            <p>
              Try another name or email.
            </p>

          </div>
        )}

    </div>
  );
}

export default AllStudents;