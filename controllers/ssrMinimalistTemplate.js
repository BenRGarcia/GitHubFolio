const React = require('react')
const createReactClass = require('create-react-class')

const styleTitleName = {
  textAlign: 'left',
  fontFamily: 'Oswald-SemiBold',
  fontSize: '2.5rem',
  color: '#666666',
  letterSpacing: '-0.04px'
}

const styleImageWrapper = {
  height: '300px',
  overflow: 'hidden'
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container'>
        <div className='row'>
          <div className="col">
            <h1
              className='mt-3 mb-4'
              style={styleTitleName}
            >
              {profileName}
            </h1>
          </div>
        </div>
        <div className='row mb-5'>
          {
            repositories &&
            repositories.map(repo => (
              <div className='col-12 col-md-6 col-lg-4 mb-3'>
                <div key={profilePageUrl}>
                  <div className='mb-0' style={styleImageWrapper}>
                    <a
                      href={repo.repositoryUrl}
                      target='_blank'
                    >
                      <img
                        src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/placeholder.png'}
                        alt="Profile"
                        className='img-fluid'
                        style={{ minHeight: '100%', verticalAlign: 'middle', horizontalAlign: 'top' }}
                      />
                    </a>
                  </div>
                  <p className='mb-0'>{repo.name}</p>
                </div>
              </div>
            ))
          }
        </div>
        <footer className="fixed-bottom bg-white">
          <div className='d-flex justify-content-around py-3'>
            <span>
              Powered by GitHubFolio
            </span>
            <span>
              <a
                href={profilePageUrl}
                target='_blank'
                style={{ color: 'initial' }}
              >
                <i
                  class="fab fa-github-square fa-2x pr-2"
                ></i>
              </a>
              <a
                href={`mailto:${email}`}
                style={{ color: 'initial' }}
              >
                <i
                  class='fab fas fa-envelope-square fa-2x pl-2'
                ></i>
              </a>
            </span>
          </div>
        </footer>
      </div>
    )
  }
})
