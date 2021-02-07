import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import LandingJumbotron from './components/landing-jumbotron/LandingJumbotron';
import TimelineSample from './components/timeline/TimelineSample'

const App = () => {
  return (
    <>
    <Switch>
      <Route path='/' >
        <LandingJumbotron />
        <div class="first-flex">
          <div class="developer-name">
            <h1>Name</h1>
            <p>Quick Headline with languages  </p>
          </div>
        <a href="mailto:myemail">Let's Chat</a>
        </div>
        <div class="first-flex">
          <h2>My Work</h2>
          <div class="card">
            <h6>Title</h6>
            <p>Subtitle</p>
          </div>
          <div class="card">
            <h6>Title</h6>
            <p>Subtitle</p>  
          </div>
          <div class="card">
            <h6>Title</h6>
            <p>Subtitle</p>
          </div>
        </div>
        <TimelineSample />
      </Route>
    </Switch>
    </>
  );
}

export default withRouter(App);
