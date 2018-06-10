module.exports = {
  path: '*',
  method: 'all',
  lookup: ['connection.remoteAddress'],
  total: 2000, // 2000 requests per hour
  expire: 1000 * 60 * 60,
  skipHeaders: true
}
