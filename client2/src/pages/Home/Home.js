import React from 'react';
import { Navbar, Panel, Jumbotron, Themes, ListInfo, Footer } from '../../components';
import routes from '../../router/Routes';

const styleDarkPanel = {
  backgroundColor: '#28314B'
};

const styleLightPanel = {
  backgroundColor: '#fff'
};

const Home = props => (
  <div className='text-center'>
    <Navbar
      routes={routes.home}
      style={styleDarkPanel}
    />
    
    <Panel style={styleDarkPanel}>
      <Jumbotron />
    </Panel>
    
    <Panel style={styleLightPanel}>
      <Themes />
    </Panel>
    
    <Panel style={styleDarkPanel}>
      <ListInfo />
    </Panel>
    
    <Footer />  
  </div>
)

export default Home
