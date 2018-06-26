const React = require('react')
const createReactClass = require('create-react-class')

const styleTitleName = {
  fontFamily: 'Oswald-SemiBold',
  fontSize: '36px',
  color: '#666666'
}

const styleBio = {
  fontFamily: 'Oswald-SemiBold',
  color: '#666666'
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container text-center'>
        <div className='section bg-light pb-5 pt-2'>
          <div><img src={profileImageUrl} alt="Profile"
            className='rounded-circle mx-auto d-block justify-content-center mt-2 mb-2 border bg-white p-2'
            style={{ width: '150px' }} />
          </div>
          <h1 style={styleTitleName}> {profileName}</h1>
          <h2 style={styleBio}> {bio}</h2>
        </div>
        {/* <p><strong className='border-dark border-bottom'>Email: </strong> <a href={`mailto:${email}`}>{email}</a></p>
          <p><strong className='border-dark border-bottom'>Location: </strong> {location}</p>
          <p><strong className='border-dark border-bottom'>GitHub Profile: </strong> <a target='_blank' href={profilePageUrl}>{profilePageUrl}</a></p> */}
        {
          repositories &&
          repositories.map(repo => (

            // <div className='border border-secondary rounded my-2 py-2' key={profilePageUrl}>
            <div className="row pt-5 pb-3" key={repo._id}>
              <div className="col-md-7">
                <a href="#">
                  <img
                    src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png'}
                    alt="Profile"
                    className='img-fluid rounded'
                    style={{ width: '700px', height: '300px' }}
                  />
                </a>
              </div>
              <div className="col-md-5 text-left">
                <h3 className='mb-0'>{repo.name}</h3>
                <p className='mb-0'><strong className='border-dark border-bottom'>Repo Description:</strong> {repo.description}</p>
                <p className='mb-0'><strong className='border-dark border-bottom'>Repo Deployed Site:</strong> <a target='_blank' href={repo.repositoryUrl}>{repo.repositoryUrl}</a></p>
                <p className='mb-0'><strong className='border-dark border-bottom'>Repo Repo Homepage:</strong> <a target='_blank' href={repo.deployedUrl}>{repo.deployedUrl}</a></p>
                <p className='mb-0'><strong className='border-dark border-bottom'>Repo Image:</strong></p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
})
