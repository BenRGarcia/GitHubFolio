import React from 'react';
import { Panel } from '../../components';

const styleDarkPanel = {
  backgroundColor: '#28314B'
};

const NotFound = () => (
  <Panel
    style={styleDarkPanel}
  >
    <div className="row text-center text-white">
      <div className="col-12">
        <h1 className='display-4'>
          Whoops!
        </h1>
      </div>
      <div className="col-12">
        <h2>
          We couldn't find the page you were looking for
        </h2>
      </div>
      <div className="col-12">
        <img
          className='img-fluid'
          src={require('../../images/404.png')}
          alt="404"
        />
      </div>
    </div>
  </Panel>
)

export default NotFound
