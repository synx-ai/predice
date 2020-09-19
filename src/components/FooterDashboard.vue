<template>
  <div class="footer-border-wrap">
    <footer class="footer-slim synx-dark-background">
      <div class="container is-vcentered">

        <div class="columns">

          <div class="column">
            <div class="content">
              <p class="is-vcentered">
                <a href="https://synx.ai/maia" target="_blank"><img :src="`${publicPath}static/img/maia-logo-color.svg`" :srcset="`${publicPath}static/img/maia-logo-color.svg 2x`" class="footer-slim-logo"></a>
              </p>
            </div>
          </div>

          <div class="column">
            <div class="content has-text-right">
              <p class="is-size-7 is-vcentered">Maia Score SAPI de CV. All Righsdsts Reserved &copy; 2020</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterDashboard',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
