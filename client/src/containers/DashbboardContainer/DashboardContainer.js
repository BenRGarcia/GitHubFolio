import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import EditUserInfo from '../../components/DashboardEditUser/DashboardEditUser';
import PinnedRepos from '../../components/DashboardEditRepos/DashboardEditRepos';
import { fetchUserInfo } from '../../actions';

import{
  DashboardSidebar,
  DashboardUserInfo,
  StylizedPinnedCard,
  MinimalistPage,
  StylizedPage,
  MinimalistPinnedCard,
  ClientSidePageMin,
  ClientSidePageSty,
  PreviewPage,
  TemplatePage,
  GitPinnedReposPage,
  DashboardEditUser,
  DashboardEditRepos,
  NotFound} 
 from '../../components';

console.log(fetchUserInfo)
 
export class DashboardContainer extends Component {
  

  componentWillMount(){
    this.props.fetchUserInfo();
  }

  render() {
    return(
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/dashboard' component={GitPinnedReposPage} />
          <Route exact path='/dashboard/template' component={TemplatePage}/>
          <Route path="/dashboard/user" render={()=><EditUserInfo />}/>          
          <Route path="/dashboard/repos" render={()=><PinnedRepos/>} />          
          {/* <Route exact path='/dashboard/repos' render={this.EditRepoInfo}/>       */}
          <Route exact path='/dashboard/preview' component={PreviewPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
    )
  }
}

// const mapStateToProps = state => ({
//   userInfo: state.userInfo
// })

export default connect(null, {fetchUserInfo})(DashboardContainer)