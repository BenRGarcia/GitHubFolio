import React from 'react';
import { Navbar } from '../../components'
import routes from '../../router/Routes';

const style = {
  panelHeight: {
    minHeight: '100vh'
  }
}

const Home = props => (
  <div className='text-center'>
    {/* Panel 1 */}
    <div className='bg-secondary' style={style.panelHeight}>
      <div className='container'>
        <div className="row">
          <div className="col">
            <Navbar
              routes={routes.home}
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row" style={style.panelHeight}>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="jumbotron jumbotron-fluid mb-0 bg-secondary">
              <div className="container text-white">
                <h1 className="display-4">
                  Introducing <strong>GitHubFolio</strong>
                </h1>
                <p className="lead">
                  Create a beautiful portolio to showcase your best work with GitHubFolio.
                </p>
                <a href="/dashboard" className='btn btn-light'>
                  Sign in with GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
