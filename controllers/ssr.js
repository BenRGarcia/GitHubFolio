require('babel-register')({
  presets: ['react']
})
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const htmlTemplate = require('../../utils/ssr')
const uuidv4 = require('uuid/v4')

const renderPortfolioPage = gitHubId => {

}

module.exports = renderPortfolioPage
