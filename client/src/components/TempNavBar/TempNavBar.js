import React from "react";
import "./TempNavBar.css";


export const TempNavBar = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Dev purposes only</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link active" href="/">Login <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/dashboard">Dashboard</a>
          <a className="nav-item nav-link" href="/portfolio/:id">Public View</a>
          <a className="nav-item nav-link" href="/dashboard/edit">Edit Portfolio</a>
          <a className="nav-item nav-link" href="#">Contact Us</a>          
        </div>
      </div>
    </nav>
  </div>
);