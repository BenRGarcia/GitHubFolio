const React = require('react')
const createReactClass = require('create-react-class')

// const user = { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl }

module.exports = createReactClass({
  render () {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            httpEquiv="X-UA-Compatible"
            content="ie=edge"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossOrigin="anonymous"
          />
          <title>
            My Portfolio Site
          </title>
        </head>
        <body>
          <div className='container text-center'>
            <h1>
              Hello World!
            </h1>
            <p>
              {this.props.text}
            </p>
          </div>
        </body>
      </html>
    )
  }
})
