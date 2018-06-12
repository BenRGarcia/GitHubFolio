import React, { Component } from 'react';
import { NavBar } from '../../components/NavBar';
import { DashboardSidebar } from '../../components/DashboardSidebar';
import { DashboardUserInfo } from '../../components/DashboardUserInfo';
import { DashboardPinnedCard } from '../../components/DashboardPinnedCard/DashboardPinnedCard';
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

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* <DashboardSidebar />
        <DashboardUserInfo
          username={this.state.name}
        />
         */}
      {this.state.pins.map(pin => (
          <DashboardPinnedCard
            key={pin.id}
            title={pin.title}
            image={pin.image}
            description={pin.description}
            githubLink={pin.githubLink}
            deployedLink={pin.deployedLink}
          />
        ))}
      </div>
    );
  }
}
