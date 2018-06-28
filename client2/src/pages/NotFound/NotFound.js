import React, { Component } from 'react';
import { Panel } from '../../components';
import { Redirect } from 'react-router-dom';

const landingBG = {
  backgroundImage: `url(${require("../../images/404Bg.png")})`,
  backgroundPosition: 'center bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#fff'
};

const style404 = {
  fontWeight: '700'
};

class NotFound extends Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    this.setState({
      redirect: false
    }, () => setTimeout(() => {
        this.setState({ redirect: true })
    }, 3000))
  }

  render() {
    return (
      <div>
        {
          this.state.redirect
          ?
          <Redirect to="/" />
          :
            <Panel style={landingBG}>
              <div className='row text-center'>
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
                  <h1 className='display-1' style={style404}>
                    404
                  </h1>
                </div>
              </div>
            </Panel>
        }
      </div>
    );
  }
}

export default NotFound
