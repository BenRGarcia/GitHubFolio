const React = require('react')
const createReactClass = require('create-react-class')

const styleTitleName = {
  textAlign: 'left',
  fontFamily: 'Oswald',
  fontWeight: '600',
  fontSize: '2.5rem',
  color: '#666666',
  letterSpacing: '-0.04px'
}

const styleImageWrapper = {
  height: '290px',
  overflow: 'hidden',
  backgroundColor: '#e5e5e5'
}

const styleImage = {
  verticalAlign: 'middle',
  minHeight: '100%'
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container'>
        <div className="row" style={{ minHeight: '88vh' }}>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className='row'>
              <div className="col-12">
                <h1
                  className='d-lg-none mt-2 mb-4 text-center'
                  style={styleTitleName}
                >
                  {profileName}
                </h1>
                <h1
                  className='d-none d-lg-block mt-2 mb-4'
                  style={styleTitleName}
                >
                  {profileName}
                </h1>
              </div>
              <div className="col-12">
                <div className='row'>
                  {
                    repositories &&
                    repositories.map(repo => (
                      <div
                        className='col-12 col-md-6 col-lg-4 mb-3'
                        key={profilePageUrl}
                      >
                        <div
                          className='mb-0 bg-light border'
                          style={styleImageWrapper}
                        >
                          <a
                            href={repo.repositoryUrl}
                            target='_blank'
                          >
                            <img
                              src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/placeholder.png'}
                              alt="Profile"
                              className='img-fluid'
                              style={styleImage}
                            />
                          </a>
                        </div>
                        <p className='mb-0'>
                          {repo.name}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <footer className="py-2">
              <span className='float-left'>
                <a
                  href="http://githubfolio.com"
                  style={{ color: 'initial' }}
                >
                    Powered by GitHubFolio
                </a>
              </span>
              <span className='float-right'>
                <a
                  href={profilePageUrl}
                  target='_blank'
                  style={{ color: 'initial' }}
                  className='ml-3'
                >
                  <i
                    className="fab fa-github-square fa-2x"
                  ></i>
                </a>
                <a
                  href={`mailto:${email}`}
                  style={{ color: 'initial' }}
                  className='ml-3'
                >
                  <i
                    className='fab fas fa-envelope-square fa-2x'
                  ></i>
                </a>
              </span>
            </footer>
          </div>
        </div>
      </div>
    )
  }
})
