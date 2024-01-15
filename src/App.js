import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./components/Form/form";
import Home from "./components/Navbar/Home";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About msg={"I am About page"} />} />
        <Route
          path="/contact"
          element={<Contact msg={"I am Contact page"} />}
        />
        <Route
          path="/form"
          element={<StudentForm msg={"Students Details Form"} />}
        />
        <Route path="/" element={<Home msg={"I am Home page"} />} />
      </Routes>
    </Router>
  );
};

export default App;
