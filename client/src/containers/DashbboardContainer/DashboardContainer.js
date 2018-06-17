import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserInfo from '../../components/DashboardEditUser/DashboardEditUser';
import PinnedRepos from '../../components/DashboardEditRepos/DashboardEditRepos';


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

export class DashboardContainer extends Component {
  
  // componentDidMount(){
  //   this.getPinnedRepos()
  //   this.getUserInfo()
  // }

  // getPinnedRepos = () => {
  //   fetch('/pinnedrepos')
  //   .then(resp => resp.json())
  //     .then(data.map(((d)=> 
  //       this.setState({
  //         pins: d.pinnedRepos
  //       })
  //    ))
  //   )
  // }

  // getUserInfo = () => {
  //   fetch('/user')
  //   .then(resp => resp.json())
  //     .then(data.map(((d)=> 
  //       this.setState({
  //         userInfo: d.userInfo
  //       })
  //    ))
  //   )
  // }

  render() {
    return(
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/dashboard' component={GitPinnedReposPage} />
          <Route exact path='/dashboard/template' component={TemplatePage}/>
          <Route path="/dashboard/user" render={()=><UserInfo />}/>          
          <Route path="/dashboard/repos" render={()=><PinnedRepos/>} />          
          <Route exact path='/dashboard/repos' render={this.EditRepoInfo}/>      
          <Route exact path='/dashboard/preview' component={PreviewPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
    )
  }
}

