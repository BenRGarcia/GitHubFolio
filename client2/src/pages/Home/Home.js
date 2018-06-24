import React from 'react';
import { Navbar, Panel, Jumbotron, Themes, ListInfo } from '../../components';
import routes from '../../router/Routes';

const light = '#fff'
const dark = '#28314B'

const styleDarkPanel = {
  backgroundColor: dark
};

const styleLightPanel = {
  backgroundColor: light
};

const Home = props => (
  <div className='text-center'>
    {/* Navbar */}
    <div className='fixed-top' style={{ backgroundColor: dark }}>
      <div className="container">
        <Navbar routes={routes.home} />
      </div>
    </div>
    {/* Panel 1 */}
    <Panel style={styleDarkPanel}>
      <Jumbotron />
    </Panel>
    {/* Panel 2 */}
    <Panel style={styleLightPanel}>
      <Themes />
    </Panel>
    {/* Panel 3 */}
    <Panel style={styleDarkPanel}>
      <ListInfo />
    </Panel>
  {/* Footer */}
  <div className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <footer className='p-4'>
              <span className='text-white'>
                Footer things go here
              </span>
            </footer>
          </div>
        </div>
      </div>
  </div>
</div>
)

export default Home
