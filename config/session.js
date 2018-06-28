require('dotenv').config()

module.exports = (RedisStore, client) => {
  return {
    cookie: {
      httpOnly: true,
      sameSite: true,
      secure: false, // change to 'true' for production
      maxAge: 60 * 60 * 1000 // 60 minutes
    },
    name: 'sessionId',
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: new RedisStore({ client })
  }
}
