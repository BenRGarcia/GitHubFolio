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
    // height: '300px'
  },

  profilePic: {
    float: 'none',
    position: 'absolute',
    top: '5%',
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
        <nav className="navbar navbar-expand border-bottom">
          <span class="navbar-brand">
            {profileName || 'Super Coder'}
          </span>
          <div className='collapse navbar-collapse justify-content-end'>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className='nav-link'
                  href={profilePageUrl}
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
                  href={`mailto:${email}`}
                >
                  <i
                    className=" fab fas fa-envelope-square fa-2x"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container'>
          <div className='section bg-light pb-5 pt-2' style={style.topPanel}>
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

          <div className="row">
            {
              repositories &&
          repositories.map(repo => (

            <div className='col-md-4 pt-5 pb-3'>
              <div className='card  d-flex' style={{ maxWidth: '400px' }}>
                <a className='mb-0'>
                  <img
                    src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/placeholder.png'}
                    alt='Profile'
                    style={{ width: '100%', maxHeight: '350px' }}
                  />
                </a>
                <div className='card-body'>
                  <h5 className='card-title' style={style.styleDescriptions}> {repo.name}</h5>
                  <p className='card-text' style={style.styleDescriptions}> {repo.description}</p>
                  <a className='btn btn-outline-secondary mr-2' target='_blank' href={repo.deployedUrl}>View Project</a>
                  <a className='btn btn-outline-secondary ml-2' target='_blank' href={repo.repositoryUrl}>GitHub</a>
                </div>

              </div>
            </div>
          ))
            }
          </div>
        </div>
      </div>
    )
  }
})
