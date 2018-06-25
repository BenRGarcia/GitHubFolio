import React, { Component } from 'react'
import { DownloadSourceCode } from '../../components'

const parseText = resp => resp.text();

class DashboardPreview extends Component {
  state = {
    html: null
  };

  componentDidMount() {
    const url = '/portfolio/user/preview';
    fetch(url, { credentials: 'include' })
      .then(parseText)
      .then(html => this.setState({ html }))
      .catch(err => console.error(err))
  }

  render() {
    const html = { __html: this.state.html }
    return (
      <div>
        <div>
          {
            this.state.html
            &&
            <DownloadSourceCode />
          }
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

export default DashboardPreview
