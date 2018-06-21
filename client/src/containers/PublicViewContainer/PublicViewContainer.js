import React, { Component } from 'react';
import { ClientSidePageMin } from '../../components/ClientSidePageMin/ClientSidePageMin';
// import { ClientSidePageSty } from '../../components/ClientSidePageSty/ClientSidePageSty';
// import { Footer } from '../../components/Footer/Footer';




export class PublicViewContainer extends Component {
  

  render() {
    return (
        <ClientSidePageMin userInfo={this.state.userInfo} pinnedRepos={this.state.pins} />
        // <ClientSidePageSty userInfo={this.state.userInfo} pinnedRepos={this.state.pins} />   
    );
  }
}
