import React, { Component } from 'react';

export class PublicPortfolioExample extends Component {
  state = {
    html: null
  };

  componentDidMount() {
    const gitHubId = this.props.gitHubId || '26657982'
    fetch(`/portfolio/user/${gitHubId}`)
      .then(resp => resp.text())
      .then(html => this.setState({ html }))
      .catch(err => console.error(err))
  }

  render() {
    const html = { __html: this.state.html }
    return (
      <div>
        {
          this.state.html
          ?
          <div className='container border border-dark'>
              <div dangerouslySetInnerHTML={html} />
          </div>
          :
          null
        }
      </div>
    )
  }
}