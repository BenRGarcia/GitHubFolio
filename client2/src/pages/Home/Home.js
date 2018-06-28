import React from 'react';
import { Navbar, Panel, Jumbotron, Themes, ListInfo, Footer } from '../../components';
import routes from '../../router/Routes';

const styleDarkPanel = {
  backgroundColor: '#28314B'
};

const styleLightPanel = {
  backgroundColor: '#fff'
};

const landingBG = {
  backgroundImage: `url(${require("../../images/landingillustration.png")})`,
  backgroundPosition: 'center bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const Home = props => (
  <div className='text-center'>
    <Navbar
      routes={routes.home}
      style={styleDarkPanel}
    />
    
    <Panel style={landingBG}>
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
