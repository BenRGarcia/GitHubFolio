import { connect } from "react-redux";
import React, { Component } from 'react';
import {fetchRepos } from '../../actions/index';
import { bindActionCreators } from "redux";
import "./GitPinnedReposBtn.css";


export class GitPinnedReposBtn extends Component {

  handleClick = (e) => {
      this.props.fetchRepos();
      window.location.reload();
    }

  render() {
    return(
      <div className= "minPageContainer">
        <div className="container pt-4">
          <div className="section pt-4 pb-4">
            <div>
              <button onClick={this.handleClick}>CLICK HERE TO POPULATE REPOS</button>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRepos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GitPinnedReposBtn);