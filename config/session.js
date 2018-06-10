module.exports = (RedisStore, client) => {
  return {
    cookie: {
      /* **** Enable for production **** */
      // domain: 'herokuapp.com',
      // path: '/',
      httpOnly: true,
      sameSite: true,
      secure: false, // change to 'true' for production
      maxAge: 30 * 60 * 1000 // 30 minutes
    },
    name: 'sessionId',
    secret: 'change this secret to a new random string before deployment',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    store: new RedisStore({ client })
  }
}
