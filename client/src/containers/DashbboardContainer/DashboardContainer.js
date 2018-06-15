import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavBar } from '../../components/NavBar/NavBar';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { DashboardSidebar } from '../../components/DashboardSidebar/DashboardSidebar';
import { DashboardUserInfo } from '../../components/DashboardUserInfo/DashboardUserInfo';
import { StylizedPinnedCard } from '../../components/StylizedPinnedCard/StylizedPinnedCard';
import { MinimalistPage } from '../../components/MinimalistPage/MinimalistPage';
import { StylizedPage } from '../../components/StylizedPage/StylizedPage';
import { SaveTemplateBtn } from '../../components/SaveTemplateBtn/SaveTemplateBtn';
import { MinimalistPinnedCard } from '../../components/MinimalistPinnedCard/MinimalistPinnedCard';
import { ClientSidePageMin } from '../../components/ClientSidePageMin/ClientSidePageMin';
import { ClientSidePageSty } from '../../components/ClientSidePageSty/ClientSidePageSty';
import { Footer } from '../../components/Footer/Footer';
import { PreviewPage } from '../../components/PreviewPage/PreviewPage.js';
import { TemplatePage } from '../../components/TemplatePage/TemplatePage.js';
import { GitPinnedReposPage } from '../../components/GitPinnedReposPage/GitPinnedReposPage.js';
import { DashboardEditUser } from '../../components/DashboardEditUser/DashboardEditUser.js';
import { DashboardEditRepos } from '../../components/DashboardEditRepos/DashboardEditRepos.js';
import {HelloWorld} from "../../components/HelloWorld.js";




export class DashboardContainer extends Component {
  state = {
    userInfo: {
      name: 'Ben Garcia',
      email: 'bgarcia@gmail.com',
      bio: 'Really cool dude who knows a lot about coding',
      userImage: 'https://www.veterantv.com/wp-content/uploads/2017/08/f5d784aa1eabbde15ba5e2d90c3ba828.jpg'
    },
    pins: [
      {
        id: 1,
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        id: 2,        
        title: 'Burger app',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'burger store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        id: 3,        
        title: 'Pomo',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'student store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        id: 4,        
        title: 'TuneUp',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'car stuffs',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        id: 5,        
        title: 'More stuff',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'stuff store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        id: 6,        
        title: 'Other stuffs',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'other stuff store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      }
    ]
  };

  

  // whichRoute = () => {
    // if(window.location.pathname=="/dashboard"){
    //   return (
    //     <div>
    //       <div>
    //         <DashboardSidebar />    
    //         {/* <DashboardUserInfo userInfo={this.state.userInfo} />            */}
    //         {/* <StylizedPinnedCard pinnedRepos={this.state.pins} />  */}
    //       </div>
    //   </div>
    //   )
    // } else if (window.location.pathname=='/dashboard/edit'){
    //   return(
    //     <div>
    //     <DashboardEditSidebar />
    //     <DashboardEdit userInfo={this.state.userInfo} pinnedRepos={this.state.pins}/>
    //   </div>
    // )
    // } else if (window.location.pathname=='/dashboard/myportfolio'){
    //   return(
    //     <div>
    //       <a href='/dashboard'><button>BACK</button></a>
    //       THIS WILL BE A PORTFOLIO THAT WE GET FROM THE DATABASE, CORRECT?
    //     </div>
    //   )
    // } else if (window.location.pathname=='/dashboard/templates'){
    //   return(
    //   <TemplateSidebar />
    //   )
    // } else if (window.location.pathname=='/dashboard/templates/minimalist'){
    //   return(
    //     <div>
    //       <TemplateSidebar />
    //       <SaveTemplateBtn />
    //       <MinimalistPage userInfo={this.state.userInfo} pinnedRepos={this.state.pins} />
    //     </div>
    //   )
    // } else if(window.location.pathname=='/dashboard/templates/stylized'){
    //   return(
    //     <div>
    //       <TemplateSidebar />
    //       <DashboardUserInfo userInfo={this.state.userInfo} />
    //       <StylizedPage userInfo={this.state.userInfo} pinnedRepos={this.state.pins}/>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       No paths matched! {window.location.pathname}
    //     </div>
    //   )
    // }
  // }
    EditUserInfo = (props) => {
      return (
        <DashboardEditUser 
        userInfo={this.state.userInfo}
        />
      );
    }

    EditRepoInfo = (props) => {
      return (
        <DashboardEditRepos
        pinnedRepos={this.state.pins}
        />
      );
    }


  render() {
    return(
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/dashboard' component={GitPinnedReposPage} />
          <Route exact path='/dashboard/template' component={TemplatePage}/>
          <Route exact path='/dashboard/user' render={this.EditUserInfo}/>
          <Route exact path='/dashboard/repos' render={this.EditRepoInfo}/>      
          <Route exact path='/dashboard/preview' component={PreviewPage} />
          <Route component={HelloWorld} />
        </Switch>
      </Router>
    </div>
    )
  }
}

