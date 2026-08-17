// Search students
export function searchStudents(students, search) {
  if (!search.trim()) {
    return students;
  }

  const searchValue = search.toLowerCase();

  return students.filter((student) =>
    student.name.toLowerCase().includes(searchValue) ||
    student.email.toLowerCase().includes(searchValue)
  );
}


// Validate student form
export function validateStudent(formData) {
  const errors = {};

  // Name
  if (!formData.name.trim()) {
    errors.name = "Student name is required";
  } else if (formData.name.trim().length < 3) {
    errors.name =
      "Name must contain at least 3 characters";
  }

  // Email
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(formData.email)) {
    errors.email =
      "Enter a valid email address";
  }

  // Phone
  if (!formData.phone.trim()) {
    errors.phone =
      "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    errors.phone =
      "Phone must contain 10 digits";
  }

  // Age
  if (!formData.age) {
    errors.age = "Age is required";
  } else if (
    Number(formData.age) < 17 ||
    Number(formData.age) > 60
  ) {
    errors.age =
      "Age must be between 17 and 60";
  }

  // Department
  if (!formData.department) {
    errors.department =
      "Please select a department";
  }

  // City
  if (!formData.city.trim()) {
    errors.city = "City is required";
  }

  return errors;
}


// Create student object
export function createStudent(formData) {
  return {
    id: Date.now(),

    name: formData.name,

    email: formData.email,

    phone: formData.phone,

    age: formData.age,

    address: {
      city: formData.city,
    },

    company: {
      name: formData.department,
    },
  };
}