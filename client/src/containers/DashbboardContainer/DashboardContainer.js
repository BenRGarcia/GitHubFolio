import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EditUserInfo from '../../components/DashboardEditUser/DashboardEditUser';
import DashboardEditRepos from '../../components/DashboardEditRepos/DashboardEditRepos';
import TemplatePage from '../../components/TemplatePage/TemplatePage';
import { fetchUserInfo } from '../../actions';


import{
  PreviewPage,
  GitPinnedReposPage,
  // DashboardEditUser,
  // DashboardEditRepos,
  NotFound} 
 from '../../components';
 
export class DashboardContainer extends Component {
  

  componentWillMount(){
    this.props.fetchUserInfo();
  }

  render() {
    return(
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/dashboard' render={()=><GitPinnedReposPage />}/>
          <Route path='/dashboard/template' render={()=><TemplatePage />}/>
          <Route path="/dashboard/user" render={()=><EditUserInfo />}/>          
          <Route path="/dashboard/repos" render={()=><DashboardEditRepos />} />          
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