import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Switch>
      <Route path='/' >
        <div class="first-flex">
          <div class="developer-name">
            <h1>Name</h1>
            <p>Quick Headline with languages  </p>
            {/* <div class="icons">
              <i class="fa fa-2x fa-github"></i>
              <i class="fa fa-2x fa-medium"></i>
              <i class="fa fa-2x fa-envelope-square"></i>
              <i class="fa fa-2x fa-twitter"></i>
              <i class="fa fa-2x fa-instagram"></i>
            </div> */}
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
      </Route>
    </Switch>
    </>
  );
}

export default withRouter(App);
