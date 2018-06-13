import React, { Component } from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { DashboardSidebar } from '../../components/DashboardSidebar/DashboardSidebar';
import { DashboardUserInfo } from '../../components/DashboardUserInfo/DashboardUserInfo';
import { DashboardPinnedCard } from '../../components/DashboardPinnedCard/DashboardPinnedCard';
import { DashboardEdit } from '../../components/DashboardEdit/DashboardEdit';
import  DashboardEditRepos from '../../components/DashboardEdit/DashboardEdit';
import { DashboardEditSidebar } from '../../components/DashboardEditSidebar/DashboardEditSidebar';
import { TemplateSidebar } from '../../components/TemplateSidebar/TemplateSidebar';
import { MinimalistPage } from '../../components/MinimalistPage/MinimalistPage';
import { MinimalistPinnedCard } from '../../components/MinimalistPinnedCard/MinimalistPinnedCard';
import { Footer } from '../../components/Footer/Footer';
import { HelloWorld } from '../../components/HelloWorld';



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

  whichRoute = () => {
    if(window.location.pathname=="/dashboard"){
      return (
        <div>
          <div style={{ textAlign: 'center' }}>
            <DashboardSidebar />    
            <DashboardUserInfo userInfo={this.state.userInfo} />           
            <DashboardPinnedCard pinnedRepos={this.state.pins} /> 
          </div>
      </div>
      )
    } else if (window.location.pathname=='/dashboard/edit'){
      return(
        <div>
        <DashboardEditSidebar />
        <DashboardEdit userInfo={this.state.userInfo} pinnedRepos={this.state.pins}/>
      </div>
    )
    } else if (window.location.pathname=='/dashboard/myportfolio'){
      return(
        <div>
          <a href='/dashboard'><button>BACK</button></a>
          THIS WILL BE A PORTFOLIO 
        </div>
      )
    } else if (window.location.pathname=='/dashboard/templates'){
      return(
      <TemplateSidebar />
      )
    } else if (window.location.pathname=='/dashboard/templates/minimalist'){
      return(
          // I DON'T LIKE ALL OF THIS IN HERE        
        <div style={{ textAlign: 'center' }}>   
        <a href='/dashboard/templates'><button>GO BACK</button></a>
        <a href='/dashboard/templates'><button>USE THIS TEMPLATE</button></a>      
        <DashboardUserInfo userInfo={this.state.userInfo} />           
        <MinimalistPinnedCard pinnedRepos={this.state.pins} />
      {/* <MinimalistPage userInfo={this.state.userInfo} pinnedRepos={this.state.pins} /> */}
      </div>
      )
    } else if(window.location.pathname=='/dashboard/templates/stylized'){
      return(
          // I DON'T LIKE ALL OF THIS IN HERE
          <div style={{ textAlign: 'center' }}>
          <a href='/dashboard/templates'><button>GO BACK</button></a>
          <a href='/dashboard/templates'><button>USE THIS TEMPLATE</button></a>          
          <DashboardUserInfo userInfo={this.state.userInfo} />           
          <DashboardPinnedCard pinnedRepos={this.state.pins} />
          </div>
      )
    }else {
      return (
        <div>
          No paths matched! {window.location.pathname}
        </div>
      )
    }
  }

  render() {

    return(
      this.whichRoute()
    )
   
  }
}

      
