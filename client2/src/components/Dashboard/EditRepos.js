import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editRepos, fetchUserInfo } from '../../store/store';
import { EditRepo, GetRepos } from '../';

class EditRepos extends Component {
  state = {
    repositories: []
  };

  prevState = {
    repositories: []
  };

  prevStateIsNextState = () => {
    const prevState = JSON.stringify(this.prevState, null, 2);
    const nextState = JSON.stringify(this.state, null, 2);
    return prevState === nextState;
  };

  handleSubmit = e => {
    e.preventDefault()
    console.log(`user hit submit button`)
    if (!this.prevStateIsNextState()) {
      this.props.editRepos(this.state)
    }
  }

  handleChange = (e, _id) => {
    const { name, value } = e.target
    const nextRepos = this.state.repositories.map(repo => {
      if (_id === repo._id) {
        repo[name] = value;
        return repo;
      } else {
        return repo
      }
    });
    this.setState({
      repositories: nextRepos
    })
  };

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  componentWillReceiveProps(nextProps) {
    const { repositories } = nextProps.userInfo
    if (repositories) {
      // Make copy of array of object copies
      const prevRepositories = repositories.map(repo => Object.assign({}, repo))
      // set state and prevState
      this.prevState = { repositories: prevRepositories }
      this.setState({ repositories: repositories });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.repositories && this.state.repositories.length > 0
          ?
            <form onSubmit={this.handleSubmit}>
              <div className="accordion" id='accordionExample'>
                <EditRepo
                  handleChange={this.handleChange}
                  repositories={this.state.repositories}
                  isDisabled={this.prevStateIsNextState()}
                />
              </div>
            </form>
          :
          <GetRepos />
        }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ editRepos, fetchUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRepos);
