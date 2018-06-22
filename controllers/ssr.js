require('babel-register')({
  presets: ['react']
})
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const htmlShell = require('./ssrHtmlShell')
const minimalistTemplate = require('./ssrMinimalistTemplate')
const stylizedTemplate = require('./ssrStylizedTemplate')

const wrapInHtmlShell = ({ body }) => {
  // console.log(`wrapInHtmlShell() was called`)
  // console.log(`will attempt to put body inside:\n`, body)
  return React.createElement(htmlShell, { body })
}

const generateHTMLWithChosenTemplate = ({ userData }) => {
  // console.log(`generateHTMLwithChosenTemplate() was called`)
  // console.log(`which template?\n`, userData.chosenTemplate)
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
  // console.log(`\n====\nline 33 here is the body:\n`, bodyRendered)
  // return bodyRendered // -> looks beautiful right here
  const page = wrapInHtmlShell({ body: bodyRendered })
  const renderedHTML = renderToStaticMarkup(page)
  console.log(renderedHTML)
  return renderedHTML
  // const renderedHTML = renderToStaticMarkup(page)
  // console.log(`\n====\nhere's the whole dang thing:\n<!DOCTYPE html>${renderedHTML}`)
  // return `<!DOCTYPE html>${renderedHTML}`
}

module.exports = {
  renderPortfolioBody,
  renderPortfolioPage
}
