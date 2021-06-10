import React from "react";
import "./style.css";
import Header from "./Header";
import Home from "./Home";
import Blog from "./Blog";
import News from "./News";
import Sports from "./Sports";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



export default function App() {
  return (
    <Router>
        <div className="container">
          <Header />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route>
                 <Sports />
              </Route>
            </Switch>  
          </div>
        </div>  
    </Router>
  );
}
