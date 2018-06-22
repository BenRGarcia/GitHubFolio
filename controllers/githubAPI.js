const axios = require('axios')
const graphqlQuery = `{ viewer { pinnedRepositories(first: 6) { edges { node { name description homepageUrl url } } } } }`

const normalizePinnedRepos = repoArray => {
  return repoArray.map(repo => {
    const { name, description, homepageUrl, url } = repo.node
    return { name, description, repositoryUrl: homepageUrl, deployedUrl: url }
  })
}

const getPinnedRepos = async accessToken => {
  try {
    // Get user's pinned repo data from GitHub
    const res = await axios({
      method: 'POST',
      url: 'https://api.github.com/graphql',
      data: { query: graphqlQuery },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${accessToken}`
      }
    })
    // Return normalized data
    return normalizePinnedRepos(res.data.data.viewer.pinnedRepositories.edges)
  } catch (err) {
    return err
  }
}

module.exports = {
  getPinnedRepos
}
