import React, { Component } from "react";
import "./TemplateBtns.css";
import  { TemplateToggleBtns } from "../../components/TemplateToggleBtns/TemplateToggleBtns.js";
import { connect } from "react-redux";
import { editUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";


export class TemplateBtns extends Component {
  state = {
    template: ""
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
    console.log(this.props)
    return(
      <div className='col-lg-10 offset-lg-2'>
        <div className="save-button pt-4 pb-4">
          <button className='btn btn-dark' type='submit' onClick={this.handleSubmit}>Save Template</button>
        </div>
        <TemplateToggleBtns />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ editUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateBtns);

