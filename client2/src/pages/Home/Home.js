import React from 'react';
import { Navbar, Panel, Jumbotron } from '../../components';
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
            /> */}
    {/* Panel 2 */}
  <div className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <h2>Beautiful portfolio themes</h2>
            <img className='img-fluid' src={require("../../images/themes.png")} alt="Theme templates" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Panel 3 */}
  <div className='bg-secondary'>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className='text-white'>Everything you need for your online portfolio</h2>
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
              <ul className='list-group'>
                <li className='list-group-item'>
                  Things that GitHub does to your things and so on...etc
                </li>
                <li className='list-group-item'>
                  We have templates and such.... yeeeehaw
                </li>
                <li className='list-group-item'>
                  This is a pencil writing on paper... you know what that means
                </li>
                <li className='list-group-item'>
                  Pencil wrench cross... some kind of teacher mechanic cult
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
