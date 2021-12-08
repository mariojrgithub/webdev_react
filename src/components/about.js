import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <article id="background" className="container-fluid text-center">
        <div className="row about">
          <header>
            <h2>About</h2>
            <hr className="line" />
          </header>

          <div className="col-lg-12 slideanim">
            <a href="#">
              <img
                className="center-block"
                src="https://lh3.googleusercontent.com/WsjoCuT_9UNK_OGDOCbjH_VW5_7xqfbgi4fp2wQVv9d12e77_9yvg2qlKznZJW_WbHOoq_3-NMqzQQvtYliHutySrrdJkO-5yWj_MUkj5Jik7X3cYmmgEZbfyEk4unQh0FSGOrLQgw=w2400"
                alt="My Picture"
                width="300px"
              />
            </a>
            <h3 id="name">Mario Sanchez, Jr.</h3>
            <h4>Owner/Operator</h4>
          </div>
        </div>
        <div className="row about">
          <section className="col-sm-4 slideanim">
            <h3>Education and Background</h3>
            <i className="fas fa-university fa-3x"></i>
            <ul>
              <li>University of Southern California</li>
              <li>Lifelong entrepreneur</li>
              <li>
                I love learning new technologies as well as teaching others
              </li>
            </ul>
          </section>
          <section className="col-sm-4 slideanim">
            <h3>Interests</h3>
            <i className="fas fa-brain fa-3x"></i>
            <ul>
              <li>Web Development</li>
              <li>Python</li>
              <li>Data Science</li>
              <li>Baseball</li>
              <li>Motorcycles</li>
            </ul>
          </section>
          <section className="col-sm-4 slideanim">
            <h3>Why I Enjoy What I Do</h3>
            <i className="fas fa-question fa-3x"></i>
            <ul>
              <li>I love to be creative</li>
              <li>Learning to program opens up opportunities</li>
              <li>
                The technologies that power the web are constantly improving
                <br />
                and they are mostly open source and freely accessible.
              </li>
            </ul>
          </section>
        </div>
      </article>
    );
  }
}
