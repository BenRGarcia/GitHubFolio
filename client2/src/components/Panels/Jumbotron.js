import React from 'react';
import { LoginWithGitHub } from '../'

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid mb-0 bg-transparent">
    <div className="container text-white">
      <h1 className="display-4 mb-4">
        GitHubFolio
      </h1>
      <p className="lead">
        Create a beautiful portolio to showcase your best work.
      </p>
      <LoginWithGitHub />
    </div>
  </div>
);

export default Jumbotron;
