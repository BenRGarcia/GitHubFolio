const React = require('react')
const createReactClass = require('create-react-class')

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
            GitHubFolio | My Portfolio Site
          </title>
        </head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </body>
      </html>
    )
  }
})
