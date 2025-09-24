// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',               // when user hits /
        destination: '/homeScreen.html',
        permanent: false,
      },
    ]
  },
}
