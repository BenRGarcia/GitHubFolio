const React = require('react')
const createReactClass = require('create-react-class')

// const user = { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl }

module.exports = createReactClass({
  render () {
    const { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl } = this.props.user
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
              Name: {displayName}
            </h1>
            <p>
              Bio: {bio}
            </p>
            <p>
              Email: {email}
            </p>
            <p>Template: {template}</p>
            <p>Color: {color}</p>
            <p>Location: {location }</p>
            <a href={profileUrl}>Profile</a>
            <div>
              <img src={photo} alt="Profile" className='img-fluid' style={{ width: '150px' }} />
            </div>
            {
              pinnedRepositories &&
              pinnedRepositories.map(repo => (
                <div className='border border-secondary'>
                  <p>Repo Name: {repo.name}</p>
                  <p>Repo Description: {repo.description}</p>
                  <p>Repo HomepageUrl: {repo.homepageUrl}</p>
                  <p>Repo Deployed Site URL: {repo.url}</p>
                  <p>Repo Image URL: {repo.imageUrl}</p>
                  <p>Repo Image Name:{repo.imageName}</p>
                </div>
              ))
            }
          </div>
        </body>
      </html>
    )
  }
})
