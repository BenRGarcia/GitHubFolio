const React = require('react')
const createReactClass = require('create-react-class')

const styleTitleName = {
  fontFamily: 'Oswald-SemiBold',
  fontSize: '36px',
  color: '#3a4145'
}

const styleBio = {
  fontFamily: 'Oswald-SemiBold',
  color: '#666666'
}

const styleDescriptions = {
  fontFamily: 'Oswald-SemiBold',
  color: '#3a4145'
}

module.exports = createReactClass({
  render () {
    const { repositories, bio, profileName, email, location, profileImageUrl, profilePageUrl } = this.props.userData
    return (
      <div className='container'>
        <div className='section bg-light pb-5 pt-2'>
          <div><img src={profileImageUrl} alt="Profile"
            className='rounded-circle mx-auto d-block justify-content-center mt-2 mb-2 border bg-white p-2'
            style={{ width: '150px' }} />
          </div>
          <h1 style={styleTitleName}> {profileName}</h1>
          <h5 style={styleBio}> {bio}</h5>
          <div className='row justify-content-center'>
            {/* <div className="col-3 text-center">
              <p style={styleBio}><a href={`mailto:${email}`}>{email}</a></p>
            </div> */}
            {/* <div className="col-3 text-center">
              <p style={styleBio}>{location}</p>
            </div> */}
            {/* <div className="col-3 text-center">
              <p style={styleBio}><a target='_blank' href={profilePageUrl}>{profilePageUrl}</a></p>
            </div> */}
            <a href={profilePageUrl} target='_blank'>
              <i class="fab fa-github-square fa-2x pr-2"></i>
            </a>
            <a href={`mailto:${email}`} target='_top' className='secondary'>
              <i class='fab fas fa-envelope-square fa-2x pl-2'></i>
            </a>
          </div>
        </div>

        <div className="row">
          {
            repositories &&
          repositories.map(repo => (
            <div className="col-md-6  pt-5 pb-3">
              <div className='card'>
                <a className='mb-0'>
                  <img
                    src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png'}
                    alt='Profile'
                    className='img-fluid'
                    style={{ width: '400px', height: '350px' }}
                  />
                </a>
                <div className='card-body'>
                  <h5 className='card-title' style={styleDescriptions}> {repo.name}</h5>
                  <p className='card-text' style={styleDescriptions}> {repo.description}</p>
                  <a class='btn btn-outline-secondary mr-2' target='_blank' href={repo.repositoryUrl}>View Project</a>
                  <a class='btn btn-outline-secondary ml-2' target='_blank' href={repo.deployedUrl}><i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
})

// <div className="col-md-6  pt-5 pb-3">
//   <div key={profilePageUrl}>
//     <a href="#" className='mb-0'>
//       <img
//         src={repo.imageUrl || 'https://s3.us-east-2.amazonaws.com/githubfolio.dn7kwp92pdrmtdefnyz6uka5/GitHubFolio_Thumbnail.png'}
//         alt="Profile"
//         className='img-fluid'
//         style={{ width: '350px' }}
//       />
//     </a>
//   </div>
//   <h3 className='mb-0' style={styleDescriptions}>{repo.name}</h3>
//   <p className='mb-0' style={styleDescriptions}> {repo.description}</p>
//   <p className='mb-0' style={styleDescriptions}><a target='_blank' href={repo.repositoryUrl}>{repo.repositoryUrl}</a></p>
//   <p className='mb-0' style={styleDescriptions}><a target='_blank' href={repo.deployedUrl}>{repo.deployedUrl}</a></p>
//   <p className='mb-0'></p>
// </div>
