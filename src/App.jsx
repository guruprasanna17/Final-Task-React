import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

import StudentsLayout from "./pages/StudentsLayout";
import AllStudents from "./pages/AllStudents";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/contact" element={<Contact />} />

          {/* Nested Student Routes */}
          <Route
            path="/students"
            element={<StudentsLayout />}
          >
            <Route
              index
              element={<AllStudents />}
            />

            <Route
              path="add"
              element={<AddStudent />}
            />

            <Route
              path=":id"
              element={<StudentDetails />}
            />
          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;