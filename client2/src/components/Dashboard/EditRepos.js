import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRepos, editRepos } from '../../store/store';
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
    this.props.fetchRepos()
  }

  componentWillReceiveProps(nextProps) {
    const { repositories } = nextProps.userInfo
    this.setState({ repositories })
  }

  render() {
    return (
      <div>
        {
          this.state.repositories.length > 0
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
  return bindActionCreators({ fetchRepos, editRepos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRepos);
