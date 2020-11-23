import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../components/About";
import Header from '../components/Header';
import MyWork from '../components/MyWork';
import SinglePage from '../components/WorkSinglePage'
import CV from "../components/CV";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path='/cv' component={CV} />
        {/* <Route path='/mywork' component={MyWork} /> */}
        {/* <Route path='/mywork/:id' component={SinglePage} /> */}
      </Switch>
    </BrowserRouter>
  );
}
