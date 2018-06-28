const React = require('react')
const createReactClass = require('create-react-class')

const style = {

  styleTitleName: {
    fontFamily: 'Oswald-SemiBold',
    fontSize: '36px',
    color: '#3a4145',
    paddingTop: '140px'
  },

  styleBio: {
    fontFamily: 'Oswald-SemiBold',
    color: '#666666'
  },

  styleDescriptions: {
    fontFamily: 'Oswald-SemiBold',
    color: '#3a4145'
  },

  topPanel: {
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)'
  },

  profilePic: {
    float: 'none',
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translate(-50%, -10%)',
    width: '150px'
  }
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='text-center'>
        {/* Navbar */}
        <nav className="navbar navbar-expand py-0">
          <span class="navbar-brand">
            {profileName || 'Super Coder'}
          </span>
          <div className='collapse navbar-collapse justify-content-end'>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className='nav-link'
                  href={profilePageUrl}
                  style={{ color: 'initial' }}
                  target="_blank"
                >
                  <i
                    className="fab fa-github-square fa-2x"
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className='nav-link'
                  style={{ color: 'initial' }}
                  href={`mailto:${email}`}
                >
                  <i
                    className="fas fa-envelope-square fa-2x"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className=''>
          {/* Jumbotron */}
          <div className='bg-light pb-5 pt-2 border-top border-bottom'>
            <div style={{ position: 'relative' }}>
              <img
                src={profileImageUrl}
                alt="Profile"
                className='rounded-circle mx-auto d-block justify-content-center mt-2 mb-2 border bg-white p-2'
                style={style.profilePic}
              />
            </div>
            <h1 style={style.styleTitleName}>
              {profileName}
            </h1>
            <p style={style.styleBio}>
              {location}
            </p>
            <h5 style={style.styleBio}>
              {bio}
            </h5>
          </div>

          <div className="container">
            <div className="row">
              {/* Repo Card */}
              {
                repositories &&
                repositories.map(repo => (
                  <div className='col-md-4 pt-5 pb-3'>
                    <div
                      className='card mx-auto'
                      style={{ maxWidth: '400px' }}
                    >
                      <div className='mb-0'>
                        <img
                          src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/placeholder.png'}
                          alt='Profile'
                          style={{ width: '100%', maxHeight: '350px' }}
                        />
                      </div>
                      <div className='card-body'>
                        <h5
                          className='card-title'
                          style={style.styleDescriptions}
                        >
                          {repo.name || 'Another Awesome Project'}
                        </h5>
                        <p
                          className='card-text'
                          style={style.styleDescriptions}
                        >
                          {repo.description || 'The most amazing thing ever built! You have to check it out!'}
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <a
                              className='btn btn-outline-secondary mb-2'
                              target='_blank'
                              href={repo.deployedUrl || repo.repositoryUrl}
                            >
                              View Project
                            </a>
                            <a
                              className='btn btn-outline-secondary mb-2'
                              target='_blank'
                              href={repo.repositoryUrl}
                            >
                              <i
                                class="fab fa-github"
                              ></i>
                              &nbsp;GitHub
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <footer>
          <div className='text-center py-3'>
            Powered by GitHubFolio
          </div>
        </footer>
      </div>
    )
  }
})
