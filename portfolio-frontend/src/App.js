import React from 'react';
import { Switch, Router, withRouter, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default withRouter(App);
