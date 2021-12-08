import React, { Component } from "react";

export default class Technology extends Component {
  render() {
    return (
      <article id="technology" className="container-fluid text-center">
        <div className="row tech">
          <header>
            <h2>What Technologies Will You Learn?</h2>
            <hr className="line" />
          </header>
          <section className="col-sm-4 slideanim">
            <h3>HTML</h3>
            <i className="fab fa-html5 fa-3x"></i>
            <p>The Main Markup Language of the Web</p>
          </section>
          <section className="col-sm-4 slideanim">
            <h3>CSS</h3>
            <i className="fab fa-css3-alt fa-3x"></i>
            <p>How The Web is Styled</p>
          </section>
          <section className="col-sm-4 slideanim">
            <h3>JavaScript</h3>
            <i className="fab fa-js fa-3x"></i>
            <p>How We Make Our Websites Interesting and Interactive</p>
          </section>
        </div>
      </article>
    );
  }
}
