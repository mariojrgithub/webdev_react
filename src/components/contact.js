import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      //   <!-- Container (Contact Section) -->
      <article id="contact" className="container-fluid">
        <div className="row">
          <header>
            <h2 className="text-center">CONTACT</h2>
            <hr className="line" />
          </header>

          <section className="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p>
              <span className="glyphicon glyphicon-map-marker"></span> Chicago,
              US
            </p>
            <p>
              <span className="glyphicon glyphicon-phone"></span> +00 1515151515
            </p>
            <p>
              <span className="glyphicon glyphicon-envelope"></span>{" "}
              myemail@something.com
            </p>
          </section>
          <section className="col-sm-7 slideanim">
            <div className="row">
              <section className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </section>
              <section className="col-sm-6 form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </section>
            </div>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Comment"
              rows="5"
            ></textarea>
            <br />
            <div className="row">
              <section className="col-sm-12 form-group">
                <button className="btn btn-default pull-right" type="submit">
                  Send
                </button>
              </section>
            </div>
          </section>
        </div>
      </article>
    );
  }
}
