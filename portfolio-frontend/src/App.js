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
            <h1>About Me</h1>
            <p>Elevator pitch with picture somewhere - maybe on the left of the page to compliment the image above</p>
            <p>Button to About page</p>
          </div>
        </div>
        <div class="first-flex">
          <h2>Projects - need to showcase better</h2>
          {/* Maybe have it as a grid, they hover over a picture to get the name and a quick synopsis and click to the project page */}
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
        <div class = "developer-name">
          <h1>Resume Timeline</h1>
          <p>
            Goes in "About Me" page
          </p>
        </div>
        <TimelineSample />
        <a href="mailto:myemail">Let's Chat</a>
      </Route>
    </Switch>
    </>
  );
}

export default withRouter(App);
