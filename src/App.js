import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Contact from "../src/components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </Router>
  );
};

export default App;
