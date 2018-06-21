require('babel-register')({
  presets: ['react']
})
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const htmlShell = require('./ssrHtmlShell')
const minimalistTemplate = require('./ssrMinimalistTemplate')
const stylizedTemplate = require('./ssrStylizedTemplate')
const fs = require('fs')
const path = require('path')
const uuidv4 = require('uuid/v4')

const tempFolder = path.join(__dirname, '../temp/ssr/')

const wrapInHtmlShell = ({ body }) => {
  return React.createElement(htmlShell, { body })
}

const generateHTMLWithChosenTemplate = ({ userData }) => {
  return userData.chosenTemplate === 'stylized'
    ? React.createElement(stylizedTemplate, { userData })
    : React.createElement(minimalistTemplate, { userData })
}

const renderPortfolioBody = ({ userData }) => {
  const body = generateHTMLWithChosenTemplate(userData)
  return renderToStaticMarkup(body)
}

const renderPortfolioPage = ({ userData }) => {
  const body = generateHTMLWithChosenTemplate({ userData })
  const page = wrapInHtmlShell(body)
  const renderedHTML = renderToStaticMarkup(page)
  return `<!DOCTYPE html>${renderedHTML}`
}

module.exports = {
  renderPortfolioBody,
  renderPortfolioPage
}
