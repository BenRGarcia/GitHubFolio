import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editRepos, fetchUserInfo } from '../../store/store';
import { EditRepo, GetRepos } from '../';

class EditRepos extends Component {
  state = {
    repositories: []
  };

  handleSubmit = e => {
    e.preventDefault()
    console.log(`user hit submit button`)
  }

  handleChange = (e, _id) => {
    const { name, value } = e.target
    console.log(`change:\nname: ${name}\nvalue: ${value}\n_id: ${_id}`)
  };

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  componentWillReceiveProps(nextProps) {
    const { repositories } = nextProps.userInfo
    if (repositories) {
      this.setState({ repositories })
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
