<template>
  <header>

    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://synx.ai/maia">
            <div class="is-hidden-touch">
              <img :src="`${publicPath}static/img/maia-logo-color.svg`" :srcset="`${publicPath}static/img/maia-logo-color.svg 2x`" alt="Maia Score">
            </div>

            <div class="media is-hidden-desktop">
              <div class="media-left">
                <img :src="`${publicPath}static/img/maia-logo-color.svg`" :srcset="`${publicPath}static/img/maia-logo-color.svg 2x`" alt="Maia Score">
              </div>
            </div>
          </a>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navigation">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navigation" class="navbar-menu">
          <div class="navbar-end">

            <a href="/how-it-works" class="navbar-item">
              <span class="navbar-item-name">How it works</span>
            </a>

            <a href="/about" class="navbar-item">
              <span class="navbar-item-name">About</span>
            </a>

            <a href="/get-in-touch" class="navbar-item">
              <span class="navbar-item-name">Get in touch</span>
            </a>

          </div>

        </div>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
  name: 'HeaderIndex',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
