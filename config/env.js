const isDev = process.env.NODE_ENV === 'development'
const isPro = process.env.NODE_ENV === 'production'

module.exports = { isDev, isPro }
