import React, { Component } from "react";

export default class HowItWorks extends Component {
  render() {
    return (
      <article id="how" className="container-fluid text-center">
        <div className="row services">
          <header>
            <h2>How it Works</h2>
            <hr className="line" />
          </header>

          <section className="col-sm-4 slideanim">
            <h3>Zoom</h3>
            <i className="fas fa-video fa-3x"></i>
            <p>
              Each coding session is done over Zoom which allows for an
              interactive experience.
            </p>
            <ul>
              <li>One-on-one attention</li>
              <li>Ability to share screens</li>
              <li>Active coding every session</li>
            </ul>
          </section>
          <section className="col-sm-4 slideanim">
            <h3>Codepen</h3>
            <i className="fab fa-codepen fa-3x"></i>
            <p>
              A free website that provides for a real-time coding experience
            </p>
            <ul>
              <li>HTML, CSS and JavaScript panels</li>
              <li>Save and share projects to work on later</li>
              <li>Huge community of developers who share their work</li>
            </ul>
          </section>
          <section className="col-sm-4 slideanim">
            <h3>Local Development Environment</h3>
            <i className="fas fa-laptop-code fa-3x"></i>
            <p>Useful tools to help develop websites on your own machine</p>
            <ul>
              <li>Code editors</li>
              <li>Browser suggestions</li>
              <li>Reference websites</li>
            </ul>
          </section>
        </div>
      </article>
    );
  }
}
