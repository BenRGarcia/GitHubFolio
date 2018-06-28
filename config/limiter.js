module.exports = {
  path: '*',
  method: 'all',
  lookup: ['connection.remoteAddress'],
  total: 3000, // 3000 requests per hour
  expire: 1000 * 60 * 60,
  skipHeaders: true
}
