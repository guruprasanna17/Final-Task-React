import {
  useId,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  validateStudent,
  createStudent,
} from "../utils/studentUtils";

import { useStudents } from "../Context/StudentContext";

function AddStudent() {

  const navigate = useNavigate();

  const {
    addStudent,
  } = useStudents();


  // useId
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const ageId = useId();
  const departmentId = useId();
  const cityId = useId();


  // useRef
  const nameRef = useRef(null);


  // useState
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      age: "",
      department: "",
      city: "",
    });


  const [errors, setErrors] =
    useState({});


  const [success, setSuccess] =
    useState("");


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    setSuccess("");


    // Validation
    const validationErrors =
      validateStudent(formData);

    setErrors(validationErrors);


    if (
      Object.keys(validationErrors)
        .length > 0
    ) {

      nameRef.current?.focus();

      return;
    }


    // Create student
    const newStudent =
      createStudent(formData);


    // Context + Reducer
    addStudent(newStudent);


    setSuccess(
      "Student added successfully!"
    );


    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      department: "",
      city: "",
    });


    // Navigate
    setTimeout(() => {
      navigate("/students");
    }, 1000);

  };


  return (
    <div className="form-page">

      <div className="form-card">

        <div className="form-header">

          <span>
            STUDENT REGISTRATION
          </span>

          <h1>
            Add New Student
          </h1>

          <p>
            Enter the student information below.
          </p>

        </div>


        {success && (
          <div className="success-message">
            ✅ {success}
          </div>
        )}


        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">

            <label htmlFor={nameId}>
              Student Name *
            </label>

            <input
              ref={nameRef}
              id={nameId}
              name="name"
              type="text"
              placeholder="Enter student name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <small className="field-error">
                {errors.name}
              </small>
            )}

          </div>


          {/* Email */}
          <div className="form-group">

            <label htmlFor={emailId}>
              Email *
            </label>

            <input
              id={emailId}
              name="email"
              type="email"
              placeholder="student@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <small className="field-error">
                {errors.email}
              </small>
            )}

          </div>


          {/* Phone + Age */}
          <div className="form-row">

            <div className="form-group">

              <label htmlFor={phoneId}>
                Phone *
              </label>

              <input
                id={phoneId}
                name="phone"
                type="tel"
                placeholder="10 digit phone"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <small className="field-error">
                  {errors.phone}
                </small>
              )}

            </div>


            <div className="form-group">

              <label htmlFor={ageId}>
                Age *
              </label>

              <input
                id={ageId}
                name="age"
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
              />

              {errors.age && (
                <small className="field-error">
                  {errors.age}
                </small>
              )}

            </div>

          </div>


          {/* Department */}
          <div className="form-group">

            <label htmlFor={departmentId}>
              Department *
            </label>

            <select
              id={departmentId}
              name="department"
              value={formData.department}
              onChange={handleChange}
            >

              <option value="">
                Select Department
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

              <option value="Electrical Engineering">
                Electrical Engineering
              </option>

              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>

              <option value="Civil Engineering">
                Civil Engineering
              </option>

            </select>

            {errors.department && (
              <small className="field-error">
                {errors.department}
              </small>
            )}

          </div>


          {/* City */}
          <div className="form-group">

            <label htmlFor={cityId}>
              City *
            </label>

            <input
              id={cityId}
              name="city"
              type="text"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
            />

            {errors.city && (
              <small className="field-error">
                {errors.city}
              </small>
            )}

          </div>


          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                navigate("/students")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-btn"
            >
              Add Student
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddStudent;