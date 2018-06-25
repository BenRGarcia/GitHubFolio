import React, { Component } from 'react';

const parseJSON = resp => resp.json();

const updateReduxStore = nextState => {
  console.log(`Sending data to the state in Redux store:\n`, nextState)
  // Melissa - your call to Redux store can go here ?
  return;
}

class GetRepos extends Component {
  state = {
    fetchSuccess: false
  };

  handleClick = () => {
    if (!this.state.fetchSuccess) {
      const url = '/api/user/pinnedrepos'
      fetch(url, {
        method: 'POST',
        credentials: 'include'
      })
        .then(parseJSON)
        .then(updateReduxStore)
        .then(() => this.setState({ fetchSuccess: true }))
        .catch(() => this.setState({ fetchSuccess: false }))
    }
  };

  render() {
    return(
        <button
          className='btn btn-outline-danger btn-large'
          onClick={this.handleClick}
        >
          {
            this.state.fetchSuccess
            ? 'Success! We retrieved your repositories!'
            : 'Get Pinned Repositories from GitHub'
          }
        </button>
    );
  }
}

export default GetRepos;
