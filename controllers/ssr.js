require('babel-register')({
  presets: ['react']
})
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const htmlShell = require('./ssrHtmlShell')
const minimalistTemplate = require('./ssrMinimalistTemplate')
const stylizedTemplate = require('./ssrStylizedTemplate')

const wrapInHtmlShell = ({ body }) => {
  return React.createElement(htmlShell, { body })
}

const generateHTMLWithChosenTemplate = ({ userData }) => {
  return userData.chosenTemplate === 'stylized'
    ? React.createElement(stylizedTemplate, { userData })
    : React.createElement(minimalistTemplate, { userData })
}

const renderPortfolioBody = ({ userData }) => {
  const body = generateHTMLWithChosenTemplate({ userData })
  const bodyRendered = renderToStaticMarkup(body)
  return bodyRendered
}

const renderPortfolioPage = ({ userData }) => {
  const body = generateHTMLWithChosenTemplate({ userData })
  const bodyRendered = renderToStaticMarkup(body)
  const html = wrapInHtmlShell({ body: bodyRendered })
  const renderedHTML = renderToStaticMarkup(html)
  return `<!DOCTYPE html>${renderedHTML}`
}

module.exports = {
  renderPortfolioBody,
  renderPortfolioPage
}
