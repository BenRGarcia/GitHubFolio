import React, { Component } from 'react';

class GetRepos extends Component {
  handleClick = () => {
    console.log(`clicked get repos`)
  };

  render() {
    return(
      <div>
        <button
          className='btn btn-outline-danger btn-large'
          onClick={this.handleClick}
        >
          Get Pinned Repositories from GitHub
        </button>
      </div>
    );
  }
}

export default GetRepos;
