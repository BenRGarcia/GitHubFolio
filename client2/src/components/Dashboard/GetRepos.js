import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../../store/store';
import { bindActionCreators } from 'redux';
import { fetchUserInfo } from '../../store/store';

class GetRepos extends Component {
  state = {
    fetchSuccess: false
  };

  handleClick = () => {
    if (this.state.fetchSuccess === false) {
      this.props.fetchRepos()
    }
  };

  componentWillReceiveProps(nextProps) {
    const { repositories } = nextProps.userInfo
    if (repositories.length > 0) {
      console.log(`repos array length = ${repositories.length}`)
      this.setState({ fetchSuccess: true })
    }
  }

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
  return bindActionCreators({ fetchRepos, fetchUserInfo }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(GetRepos);
