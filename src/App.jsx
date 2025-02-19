import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CustomNavbar from "./components/Navbar";
import Home from "./pages/Home";

import "flowbite/dist/flowbite.min.css";
import CustomFooter from "./components/Footer";

// Component to handle external redirection
const RedirectToExternal = ({ url }) => {
  useEffect(() => {
    window.location.replace(url); // Immediate redirection without delay
  }, [url]);

  return null; // Nothing to render, just a redirect
};

export default function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project1"
          element={
            <RedirectToExternal url="https://ecommerce-coral-five.vercel.app/" />
          }
        />
        <Route
          path="/project2"
          element={<RedirectToExternal url="https://travelvlog.vercel.app/" />}
        />
        <Route
          path="/project3"
          element={
            <RedirectToExternal url="https://trash-classifier-ai.vercel.app/" />
          }
        />
      </Routes>
      <CustomFooter />
    </Router>
  );
}
