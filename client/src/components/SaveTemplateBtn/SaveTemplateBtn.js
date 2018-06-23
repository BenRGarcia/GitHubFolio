import React, { Component } from "react";
import "./SaveTemplateBtn.css";
import { connect } from "react-redux";
import { fetchUserInfo, editUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";


export class SaveTemplateBtn extends Component {
  state = {
    template: " "
  }

  initialized = false;

  componentWillReceiveProps(nextProps){
    if(!this.initialized){
      this.initialized = true;
      const { template } = nextProps.userInfo
      this.setState({
        template
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editUserInfo(this.state) 
  }


  render() {
    return(
      <div className="save-button pt-4 pb-4">
        <button className='btn btn-dark' type='submit' onClick={this.handleSubmit}>Save Template</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo, editUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveTemplateBtn);

