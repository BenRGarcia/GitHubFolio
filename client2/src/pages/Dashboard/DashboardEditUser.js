import React, { Component } from 'react'
import { UserInput } from '../../components';

class DashboardEditUser extends Component {
  state = {
    profileName: "",
    email: "",
    bio: "",
    location: ""
  }

  handleSubmit = () => {

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
          <div className='flex-column'>
            {this.renderInputs()}
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardEditUser
