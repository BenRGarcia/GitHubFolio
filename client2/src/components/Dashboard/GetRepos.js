import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../../store/store';
import { bindActionCreators } from 'redux';

class GetRepos extends Component {
  state = {
    fetchSuccess: false
  };

  handleClick = () => {
    this.props.fetchRepos()
    this.setState({
      fetchSuccess: true
    });
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

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRepos }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(GetRepos);
