import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserInfo } from '../../store/store';
import { DownloadSourceCode } from '../../components'

const styleBG = {
  backgroundImage: `url(${require('../../images/404Bg.png')})`,
  backgroundSize: 'cover',
  backgroundPosition: '30% 35%'
};

const parseText = resp => resp.text();

class DashboardPreview extends Component {
  state = {
    html: null,
    gitHubId: ''
  };

  componentDidMount() {
    this.props.fetchUserInfo()
    const url = '/portfolio/user/preview';
    fetch(url, { credentials: 'include' })
      .then(parseText)
      .then(html => this.setState({ html }))
      .catch(err => console.error(err))
  }

  componentWillReceiveProps(nextProps) {
    const { gitHubId } = nextProps.userInfo
    this.setState({ gitHubId })
  }

  render() {
    const html = { __html: this.state.html }
    return (
      <div>
        <div
          className="accordion"
          id="accordionExample"
        >
          <div className="card">
            <div
              className="card-header"
              style={styleBG}
              id="headingOne"
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-white"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i
                    className="fas fa-toolbox fa-lg"
                  ></i>
                  &nbsp;&nbsp;Click here to open tool box
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body border-bottom bg-light">
                {
                  this.state.gitHubId
                  &&
                  <div>
                    <a
                      className='btn btn-outline-danger'
                      href={`/portfolio/user/${this.state.gitHubId}`}
                      target='_blank'>
                      View Public Portfolio Page
                    </a>
                  </div>
                }
                {
                  this.state.html
                  &&
                  this.state.gitHubId
                  &&
                  <div className='my-3'>
                    OR
                  </div>
                }
                {
                  this.state.html
                  &&
                  <div>
                    <DownloadSourceCode />
                  </div>
                }
              </div>
            </div>
          </div>
          </div>
        <div>
          {
            this.state.html
            &&
            <div dangerouslySetInnerHTML={html} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPreview)
