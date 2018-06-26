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

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  // initialized = false;

  componentWillReceiveProps(nextProps) {
    console.log(`componentWillReceiveProps was called`)
    // if (!this.initialized) {
      this.initialized = true;
      const { email, location, profileName, bio } = nextProps.userInfo
      this.setState({
        profileName,
        email,
        bio,
        location
      })
    // }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.editUserInfo(this.state)
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
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
          <form
            className='flex-column'
            onSubmit={this.handleSubmit}
          >
            {this.renderInputs()}
            <button
              type='submit'
              className='mt-3 btn btn-dark'
            >
              Submit
            </button>
          </form>
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
