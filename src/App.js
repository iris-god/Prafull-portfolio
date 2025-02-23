import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Giscus from "@giscus/react";
import { MdClose } from "react-icons/md";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage, PortfolioPage, NotFound } from "./pages";
import { BackToTop, Twitter, ChatIcon } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  const [showComment, setShowComment] = useState(false);

  console.log(
    "%cDEVELOPER PORTFOLIO",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/Programing-School/developer-portfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/404" exact component={NotFound} />

          <Redirect to="/404" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
