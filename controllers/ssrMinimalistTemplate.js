const React = require('react')
const createReactClass = require('create-react-class')

const styleTitleName = {
  textAlign: 'left',
  fontFamily: 'Oswald-SemiBold',
  fontSize: '36px',
  color: '#666666',
  letterSpacing: '-0.04px'
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container'>
        <div className='row pl-5 ml-2'>
          <h1 className=' mt-4 mb-2' style={styleTitleName}>{profileName}</h1>
        </div>
        <div className='row'>
          {
            repositories &&
          repositories.map(repo => (
            <div className='col-md-4 mb-5 mt-5'>
              <div key={profilePageUrl}>
                <div className='mb-0'>
                  <img
                    src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png'}
                    alt="Profile"
                    className='img-fluid'
                    style={{ width: '230px' }}
                  />
                </div>
                <p className='mb-0'><strong></strong> {repo.name}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
})
