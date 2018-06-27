import React, { Component } from 'react';
import DashboardRouter from '../../router/Dashboard';
import { DashboardSidebar, Navbar } from '../../components';
import { Redirect } from 'react-router-dom';
import routes from '../../router/Routes'

const styleDarkPanel = {
  backgroundColor: '#28314B'
};

const parseJSON = resp => resp.json();

class Dashboard extends Component {
  state = {
    isAuthenticated: true
  };

  componentDidMount() {
    console.log(`componentDidMount was called`)
    this.checkAuthenticatedState()
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate was called`)
    this.checkAuthenticatedState()
  }

  checkAuthenticatedState() {
    fetch('/api/user/isauthenticated', { credentials: 'include' })
      .then(parseJSON)
      .then(this.setAuthState)
  }

  setAuthState = nextState => {
    const { isAuthenticated } = nextState;
    console.log(`verified with server and user auth state is: ${isAuthenticated}`)
    this.setState({ isAuthenticated });
  }

  render() {
    return (
      <div>
        {
          !this.state.isAuthenticated
          ?
          <Redirect to='/' />
          :
          <div>
            {/* Hide navbar on larger screens */}
            <div className='d-lg-none'>
              <Navbar
                routes={routes.dashboard}
                style={styleDarkPanel}
                logout={true}
              />
            </div>
            {/* Hide sidebar on smaller screens */}
            <div className='d-none d-lg-block'>
              <div className="row">
                <DashboardSidebar
                  routes={routes.dashboard}
                  style={styleDarkPanel}
                />
              </div>
            </div>
            {/* Nested subpages render here */}
            <div className="row text-center">
              <div className='col-12 col-lg-9 col-xl-10 ml-auto'>
                {/* Add top margin when navbar visible */}
                <div className='d-lg-none' style={{ marginBottom: '60px' }}></div>
                <div className='container'>
                  <DashboardRouter
                    routes={routes.dashboard}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Dashboard;
