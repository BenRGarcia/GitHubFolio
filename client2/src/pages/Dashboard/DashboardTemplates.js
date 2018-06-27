import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserInfo, editUserInfo } from '../../store/store';
import { bindActionCreators } from "redux";

// const style = {
//   fontFamily: 'Oswald-SemiBold',
//   fontSize: '36px',
//   color: '#666666',
//   letterSpacing: '-0.04px',
//   textAlign: 'left'
// };

class DashboardTemplates extends Component {
  state = {
    chosenTemplate: ''
  };

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  componentWillReceiveProps(nextProps) {
    const { chosenTemplate } = nextProps.userInfo
    if (chosenTemplate) {
      this.setState({ chosenTemplate })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const nextState = { ...this.state }
    if (nextState.chosenTemplate !== '') {
      this.props.editUserInfo(this.state)
    }
  };

  handleToggle = () => {
    console.log(`Ben, you need to handle the toggle...`)
  };

  render() {
    return (
      <div>
        <div>
          <button
            className='btn btn-outline-dark'
            type='submit'
            onClick={this.handleSubmit}
          >
            Save Template || Saved!
          </button>
        </div>
        <div>
          <div
            className="btn-group btn-group-toggle"
            data-toggle="buttons"
          >
            <label
              className="btn btn-secondary active"
              onClick={this.handleToggle}
            >
              Minimalist
              <input
                type="radio"
                name="options"
                id="minimalist"
                autoComplete="off"
                checked={this.state.chosenTemplate === 'minimalist' ? true : false}
              />
            </label>
            <label
              className="btn btn-secondary"
              onClick={this.handleToggle}
            >
              Stylized
              <input
                type="radio"
                name="options"
                id="stylized"
                autoComplete="off"
                checked={this.state.chosenTemplate === 'stylized' ? true : false}
              />
            </label>
          </div>
          <div>
            {
              this.state.chosenTemplate !== 'minimalist'
              ?
              <img
                src={require('../../images/stylized-temp.png')}
                alt='profile'
              />
              :
              <img
                src={require('../../images/minimalist-temp.png')}
                alt='profile'
              />
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTemplates);
