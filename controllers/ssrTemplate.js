const React = require('react')
const createReactClass = require('create-react-class')

const style = {
  background: '#ddd'
}

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
        <body style={style}>
          <div className='container text-center'>
            <h1>
              <strong className='border-dark border-bottom'>Name: </strong> {displayName}
            </h1>
            <p>
              <strong className='border-dark border-bottom'>Bio: </strong> {bio}
            </p>
            <p>
              <strong className='border-dark border-bottom'>Email: </strong> <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p><strong className='border-dark border-bottom'>Template: </strong> {template}</p>
            <p><strong className='border-dark border-bottom'>Color: </strong> {color}</p>
            <p><strong className='border-dark border-bottom'>Location: </strong> {location}</p>
            <p>
              <strong className='border-dark border-bottom'>GitHub Profile: </strong>
              <a target='_blank' href={profileUrl}>{profileUrl}</a>
            </p>
            <div>
              <img src={photo} alt="Profile" className='img-fluid' style={{ width: '150px' }} />
            </div>
            {
              pinnedRepositories &&
              pinnedRepositories.map(repo => (
                <div className='border border-secondary rounded my-2 py-2' key={profileUrl}>
                  <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Name: {repo.name}</p>
                  <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Description: {repo.description}</p>
                  <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Deployed Site: <a target='_blank' href={repo.homepageUrl}>{repo.homepageUrl}</a></p>
                  <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Repo Homepage: <a target='_blank' href={repo.url}>{repo.url}</a></p>
                  <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Image:</p>
                  <div className='mb-0'>
                    <img src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png'}
                      alt="Profile"
                      className='img-fluid rounded'
                      style={{ width: '150px' }}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </body>
      </html>
    )
  }
})
