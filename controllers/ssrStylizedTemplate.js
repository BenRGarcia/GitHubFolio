const React = require('react')
const createReactClass = require('create-react-class')

const style = {
  // ... add all inline stylized css here
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container text-center'>
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
              <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Name: {repo.name}</p>
              <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Description: {repo.description}</p>
              <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Deployed Site: <a target='_blank' href={repo.homepageUrl}>{repo.homepageUrl}</a></p>
              <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Repo Homepage: <a target='_blank' href={repo.url}>{repo.url}</a></p>
              <p className='mb-0'><strong className='border-dark border-bottom'></strong>Repo Image:</p>
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
