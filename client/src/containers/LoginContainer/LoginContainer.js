import React, { Component } from 'react';
import { NavBar } from '../../components/NavBar';
import { DashboardSidebar } from '../../components/DashboardSidebar';
import { DashboardUserInfo } from '../../components/DashboardUserInfo';
import { DashboardPinnedCard } from '../../components/DashboardPinnedCard';
import { Footer } from '../../components/Footer';
import { HelloWorld } from '../../components/HelloWorld';

export class LoginContainer extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* <DashboardSidebar />
        <DashboardUserInfo
          username={this.state.name}
        />
        <DashboardPinnedCard
          pinnedRepos={this.state.pins}
        /> */}
        <HelloWorld
          
        />
      </div>
    );
  }
}
