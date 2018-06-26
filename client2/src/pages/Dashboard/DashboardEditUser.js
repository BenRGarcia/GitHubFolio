import React, { Component } from 'react';
import { connect } from "react-redux";
import { UserInput } from '../../components';
import { bindActionCreators } from "redux";
import { fetchUserInfo, editUserInfo } from '../../store/store';

class DashboardEditUser extends Component {
  state = {
    profileName: "",
    email: "",
    bio: "",
    location: ""
  }

  prevState = {
    profileName: "",
    email: "",
    bio: "",
    location: ""
  };

  prevStateIsNextState = () => {
    const prevState = JSON.stringify(this.prevState);
    const nextState = JSON.stringify(this.state);
    return prevState === nextState;
  };

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  componentWillReceiveProps(nextProps) {
    const { email, location, profileName, bio } = nextProps.userInfo
    const nextState = { profileName, email, bio, location };
    this.prevState = nextState
    this.setState(nextState)
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.prevStateIsNextState()) {
      this.props.editUserInfo(this.state)
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  renderInputs = () => {
    const inputs = [];
    for (let key in this.state) {
      inputs.push(
        <UserInput
          label={key.toUpperCase()}
          key={key}
          handleChange={this.handleChange}
          name={key}
          value={this.state[key]}
        />
      )
    }
    return inputs
  };

  render() {
    return (
      <div className="row" style={{ minHeight: '100vh' }}>
        <div className="col d-flex justify-content-center align-items-center">
          <div className="flex-fill px-5">
            <h1>
              Profile Data
            </h1>
            <form
              onSubmit={this.handleSubmit}
            >
              {this.renderInputs()}
              <button
                type='submit'
                className={'mt-3 btn btn-outline-dark'}
                disabled={this.prevStateIsNextState()}
              >
                {
                  this.prevStateIsNextState()
                  ?
                  'Saved!'
                  :
                  'Save Changes'
                }
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo, editUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditUser);
