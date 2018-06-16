import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import{
  DashboardSidebar,
  DashboardUserInfo,
  StylizedPinnedCard,
  MinimalistPage,
  StylizedPage,
  MinimalistPinnedCard,
  ClientSidePageMin,
  ClientSidePageSty,
  Footer,
  PreviewPage,
  TemplatePage,
  GitPinnedReposPage,
  DashboardEditUser,
  DashboardEditRepos,
  HelloWorld
} from '../../components';

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
          <Route path="/dashboard/user" render={()=><DashboardEditUser userInfo={this.state.userInfo}/>} />
          <Route path="/dashboard/repos" render={()=><DashboardEditRepos  pinnedRepos={this.state.pins}/>} />          
          <Route exact path='/dashboard/repos' render={this.EditRepoInfo}/>      
          <Route exact path='/dashboard/preview' component={PreviewPage} />
          <Route component={HelloWorld} />
        </Switch>
      </Router>
    </div>
    )
  }
}

