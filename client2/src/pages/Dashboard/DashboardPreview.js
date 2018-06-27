import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserInfo } from '../../store/store';
import { DownloadSourceCode } from '../../components'

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
      <div className='mt-4'>
        <div className='card'>
          <div className="card-body">
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
