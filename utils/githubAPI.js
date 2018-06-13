export const githubAPI = async (queryString) => {
  // GitHub token
  const token = process.env.GITHUB_API_TOKEN
  // GraphQL query string
  const query = `
  query {
    viewer {
      pinnedRepositories(first:6) {
        edges {
          node {
            name
            description
            homepageUrl
            url
          }
        }
      }
    }
  }`
  // Fetch data from GitHub
  const resp = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    },
    body: JSON.stringify({ query })
  })
  const json = await resp.json()
  return json
}

/*
Sample API response from github v4 api:

{
  "data": {
    "viewer": {
      "bio": "Software Engineer in Raleigh, NC",
      "name": "Ben Garcia",
      "email": "ben@seebenprogram.com",
      "pinnedRepositories": {
        "edges": [
          {
            "node": {
              "name": "BenRGarcia.github.io",
              "description": "Developer Portfolio Page",
              "homepageUrl": "http://SeeBenProgram.com",
              "url": "https://github.com/BenRGarcia/BenRGarcia.github.io"
            }
          }, {
            "node": {
              "name": "Pomo",
              "description": "A Classroom Tool for Teachers!",
              "homepageUrl": "https://protected-brook-18574.herokuapp.com/",
              "url": "https://github.com/BenRGarcia/Pomo"
            }
          }, {
            "node": {
              "name": "Multiplayer-Trivia-v2",
              "description": "Multiplayer Trivia game using Vue.js webpack template, Vuex, Firebase, and Bootstrap v4",
              "homepageUrl": null,
              "url": "https://github.com/BenRGarcia/Multiplayer-Trivia-v2"
            }
          }, {
            "node": {
              "name": "burger2",
              "description": "A remake of 'burger' with Sequelize",
              "homepageUrl": "https://calm-stream-32059.herokuapp.com/",
              "url": "https://github.com/BenRGarcia/burger2"
            }
          }, {
            "node": {
              "name": "Bamazon",
              "description": "Node.js command line app with MySQL",
              "homepageUrl": null,
              "url": "https://github.com/BenRGarcia/Bamazon"
            }
          }, {
            "node": {
              "name": "Gif-Tastic-v2",
              "description": "A Vue.js project, made using Vue.js CLI's webpack template + Bootstrap v4",
              "homepageUrl": null,
              "url": "https://github.com/BenRGarcia/Gif-Tastic-v2"
            }
          }
        ]
      }
    }
  }
}
*/
