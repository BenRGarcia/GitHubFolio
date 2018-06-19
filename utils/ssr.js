const React = require('react')
const createReactClass = require('create-react-class')

const style = {
  background: 'red'
}

module.exports = createReactClass({
  render () {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossorigin="anonymous"
          />
          <title>
            My Portfolio Site
          </title>
        </head>
        <body style={style}>
          <div id='app'>
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
