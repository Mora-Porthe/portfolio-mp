import React from "react";
/* import { BrowserRouter } from "react-router-dom"; */
import Navbar from "./Navbar";
import Hello from "./Hello";
import Knowledge from "./Knowledge";
import Projects from "./Projects";
import Contact from "./Contact";
import "../stylesheets/App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Hello />
      <Knowledge />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
