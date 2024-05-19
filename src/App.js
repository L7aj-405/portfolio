import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import ProjectInfo from './components/ProjectInfo'; // Import your project detail component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/l7aj-coding" element={
            <>
              <Banner />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectInfo />} /> {/* Route for project detail */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
