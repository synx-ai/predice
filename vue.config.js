module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/predice/'
    : '/',
  outputDir: 'docs',
  devServer: {
     headers: {
        'X-Frame-Options': 'SAMEORIGIN'
    }
  }
}
