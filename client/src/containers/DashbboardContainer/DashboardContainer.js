import React, { Component } from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { DashboardSidebar } from '../../components/DashboardSidebar/DashboardSidebar';
import { DashboardUserInfo } from '../../components/DashboardUserInfo/DashboardUserInfo';
import { DashboardPinnedCard } from '../../components/DashboardPinnedCard/DashboardPinnedCard';
import { Footer } from '../../components/Footer';
import { HelloWorld } from '../../components/HelloWorld';



export class DashboardContainer extends Component {
  state = {
    name: 'Ben Garcia',
    email: 'bgarcia@gmail.com',
    bio: 'Really cool dude who knows a lot about coding',
    userImage: 'data:image/jpeg;base64,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',
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
        <Wrapper>
          <DashboardUserInfo
             name={this.state.name}
             email={this.state.email}
             bio={this.state.bio}
             userImage={this.state.userImage}/>          
          <DashboardSidebar />
           
       
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
        </Wrapper>   
      </div>
    );
  }
}
