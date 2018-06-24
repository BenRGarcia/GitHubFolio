import React, { Component } from "react";
import "./TemplatePage.css";
// import "../TemplateToggleBtns/TemplateToggleBtns.css"
// import  { TemplateToggleBtns } from "../../components/TemplateToggleBtns/TemplateToggleBtns.js";
import { connect } from "react-redux";
import { editUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";


export class TemplatePage extends Component {

  state = {
    profileName: "" ,
    email: " ",
    bio: " ",
    chosenTemplate: " "
  }

  initialized = false;

  componentWillReceiveProps(nextProps){
    console.log('next props', nextProps)
    if(!this.initialized){
      this.initialized = true;
      const { chosenTemplate, profileName, email, bio } = nextProps.userInfo
      this.setState({
        chosenTemplate,
        profileName,
        email,
        bio
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('state\n', this.state)
    this.props.editUserInfo(this.state).then(response => {console.log('response\n', response)})
  }

handleClickMinimalist = () => {
    this.setState({
        chosenTemplate: "minimalist",
        profileName: this.props.userInfo.profileName,
        email: this.props.userInfo.email,
        bio: this.props.userInfo.bio
    })
    console.log('click state min', this.state)
}

handleClickStylized = () => {
    this.setState({
        chosenTemplate: "stylized",
        profileName: this.props.userInfo.profileName,
        email: this.props.userInfo.email,
        bio: this.props.userInfo.bio 
    })
    console.log('click state sty', this.state)
}

  render() {
    console.log('STATE\n', this.props.userInfo)
    return(
      <div className='col-lg-10 offset-lg-2'>
        <div className="save-button pt-4 pb-4">
          <button className='btn btn-dark' type='submit' onClick={this.handleSubmit}>Save Template</button>
        </div>
        <div>
            <div className="toggle-buttons pt-4 pb-4 btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active"  onClick={this.handleClickMinimalist}>
                    <input type="radio" name="options" id="Minimalist" autoComplete="off"/> Minimalist
                </label>
                <label className="btn btn-secondary" onClick={this.handleClickStylized}>
                    <input type="radio" name="options" id="Stylized" autoComplete="off"/> Stylized
                </label>
            </div>
            <div id="template">            
                {this.state.chosenTemplate==="stylized"
                  ? 
                  <img src={ require('./stylized-temp.png') } />
                  : 
                  <img src={ require('./minimalist-temp.png') } />
              }
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);

