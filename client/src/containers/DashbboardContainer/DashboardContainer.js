import React, { Component } from 'react';
import { NavBar } from '../../components/NavBar';
import { DashboardSidebar } from '../../components/DashboardSidebar';
import { DashboardUserInfo } from '../../components/DashboardUserInfo';
import { DashboardPinnedCard } from '../../components/DashboardPinnedCard';
import { Footer } from '../../components/Footer';
import { HelloWorld } from '../../components/HelloWorld';



export class DashboardContainer extends Component {
  state = {
    name: 'Ben Garcia',
    email: 'bgarcia@gmail.com',
    bio: 'Really cool dude who knows a lot about coding',
    userImage: 'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',
    pins: [
      {
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      },{
        title: 'Bamazon',
        image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
        description: 'CLI store',
        githubLink: 'www.github.com',
        deployedLink:'www.google.com'
      }
    ],


  };

  componentDidMount() {
    fetch('/api/user/data')
      .then(resp => resp.json())
      .then(data => this.setState({ apiServerStatus: data.status }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <HelloWorld
          title= {this.state.name}
          // apiServerStatus={this.state.apiServerStatus}
        />
      </div>
    );
  }
}