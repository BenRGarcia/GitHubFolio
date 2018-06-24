// import React, { Component } from "react";
// import "./TemplateBtns.css";
// import "../TemplateToggleBtns/TemplateToggleBtns.css"
// // import  { TemplateToggleBtns } from "../../components/TemplateToggleBtns/TemplateToggleBtns.js";
// import { connect } from "react-redux";
// import { editUserInfo } from '../../actions/index';
// import { bindActionCreators } from "redux";


// export class TemplateBtns extends Component {

//   state = {
//     chosenTemplate: " "
//   }

//   initialized = false;

//   componentWillReceiveProps(nextProps){
//     console.log('next props', nextProps)
//     if(!this.initialized){
//       this.initialized = true;
//       const { chosenTemplate } = nextProps.userInfo
//       this.setState({
//         chosenTemplate
//       })
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('state\n', this.state)
//     this.props.editUserInfo(this.state.chosenTemplate).then(response => {console.log('response\n', response)})
//   }

// handleClickMinimalist = () => {
//     this.setState({
//         chosenTemplate: "minimalist"
//     })
//     console.log('click state min', this.state)
// }

// handleClickStylized = () => {
//     this.setState({
//         chosenTemplate: "stylized" 
//     })
//     console.log('click state sty', this.state)
// }

//   render() {
//     console.log('PROPS\n', this.props)
//     return(
//       <div className='col-lg-10 offset-lg-2'>
//         <div className="save-button pt-4 pb-4">
//           <button className='btn btn-dark' type='submit' onClick={this.handleSubmit}>Save Template</button>
//         </div>
//         <div>
//             <div className="toggle-buttons pt-4 pb-4 btn-group btn-group-toggle" data-toggle="buttons">
//                 <label className="btn btn-secondary active"  onClick={this.handleClickMinimalist}>
//                     <input type="radio" name="options" id="Minimalist" autoComplete="off"/> Minimalist
//                 </label>
//                 <label className="btn btn-secondary" onClick={this.handleClickStylized}>
//                     <input type="radio" name="options" id="Stylized" autoComplete="off"/> Stylized
//                 </label>
//             </div>
//             <div id="template">            
//                 {this.state.chosenTemplate==="stylized"
//                   ? 
//                   <img src={ require('./stylized-temp.png') } />
//                   : 
//                   <img src={ require('./minimalist-temp.png') } />
//               }
//             </div>
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return { userInfo: state.userInfo };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ editUserInfo }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TemplateBtns);

