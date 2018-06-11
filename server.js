const createError = require('http-errors')
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redis = require('redis')
const client = redis.createClient(process.env.REDIS_URL || null)
// const passport = require('./config/passport.js')
const limiterConfig = require('./config/limiter.js')
const sessionConfig = require('./config/session')(RedisStore, client)
const path = require('path')
const logger = require('morgan')
const app = express()
const routes = require('./routes')
const limiter = require('express-limiter')(app, client)
limiter(limiterConfig)

// Middleware
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session(sessionConfig))
// app.use(passport.initialize())
// app.use(passport.session())
// Static assets - React Build
app.use(express.static(path.join(__dirname, 'build')))
// API Server routes
app.use(routes)

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).send()
})

module.exports = app