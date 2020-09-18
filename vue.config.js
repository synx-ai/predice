module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/maia/'
    : '/',
  outputDir: 'docs',
  devServer: {
     headers: {
        'X-Frame-Options': 'SAMEORIGIN'
    }
  }
}
