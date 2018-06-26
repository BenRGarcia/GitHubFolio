import React, { Component } from 'react';
import { EditRepos } from '../../components';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRepos, editRepos } from '../../store/store';

class DashboardEditRepos extends Component {
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
      <div className="row mt-3">
        <div className="col">
          <form onSubmit={this.handleSubmit}>
            <div className="accordion">
              <EditRepos
                repositories={this.state.repositories}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <button type='submit' className='mb-3 btn btn-outline-dark'>
              Save Changes
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
  return bindActionCreators({ fetchRepos, editRepos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditRepos)
