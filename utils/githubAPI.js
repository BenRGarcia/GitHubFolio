const axios = require('axios')
const graphqlQuery = `
  query {
    viewer {
      pinnedRepositories(first:6) {
        edges { node { name description homepageUrl url } }
      }
    }
  }
`

export const getPinnedRepos = async accessToken => {
  // Get user's pinned repo data from GitHub
  const res = await axios({
    method: 'POST',
    url: 'https://api.github.com/graphql',
    data: JSON.stringify({ graphqlQuery }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${accessToken}`
    }
  })
  // Return normalized data
  return normalizePinnedRepos(res.data.data.viewer.pinnedRepositories.edges)
}

const normalizePinnedRepos = repoArray => {
  return repoArray.map(repo => {
    const { name, description, homepageUrl, url } = repo.node
    return { name, description, homepageUrl, url }
  })
}
