const React = require('react')
const createReactClass = require('create-react-class')

const style = {
  // ... add all inline minimalist css here
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container text-center'>
        <h1 className='display-1'>Minimalist Template</h1>
        <h1><strong className='border-dark border-bottom'>Name: </strong> {profileName}</h1>
        <p><strong className='border-dark border-bottom'>Bio: </strong> {bio}</p>
        <p><strong className='border-dark border-bottom'>Email: </strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong className='border-dark border-bottom'>Location: </strong> {location}</p>
        <p><strong className='border-dark border-bottom'>GitHub Profile: </strong><a target='_blank' href={profilePageUrl}>{profilePageUrl}</a></p>
        <div><img src={profileImageUrl} alt="Profile" className='img-fluid' style={{ width: '150px' }} /></div>
        {
          repositories &&
          repositories.map(repo => (
            <div className='border border-secondary rounded my-2 py-2' key={profilePageUrl}>
              <p className='mb-0'><strong className='border-dark border-bottom'>Repo Name:</strong> {repo.name}</p>
              <p className='mb-0'><strong className='border-dark border-bottom'>Repo Description:</strong> {repo.description}</p>
              <p className='mb-0'><strong className='border-dark border-bottom'>Repo Deployed Site:</strong> <a target='_blank' href={repo.repositoryUrl}>{repo.repositoryUrl}</a></p>
              <p className='mb-0'><strong className='border-dark border-bottom'>Repo Repo Homepage:</strong> <a target='_blank' href={repo.deployedUrl}>{repo.deployedUrl}</a></p>
              <p className='mb-0'><strong className='border-dark border-bottom'>Repo Image:</strong></p>
              <div className='mb-0'>
                <img
                  src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png'}
                  alt="Profile"
                  className='img-fluid rounded'
                  style={{ width: '150px' }}
                />
              </div>
            </div>
          ))
        }
      </div>
    )
  }
})
