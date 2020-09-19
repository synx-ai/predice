<template>
  <div class="footer-border-wrap">
    <footer class="footer synx-dark-background">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <h5><strong>Company</strong></h5>
            <p class="is-size-7">About</p>
            <p class="is-size-7">Carrers</p>
            <p class="is-size-7">Press</p>
            <p class="is-size-7">Events</p>
          </div>

          <div class="column is-one-quarter">
            <h5><strong>Support</strong></h5>
            <p class="is-size-7">Developers</p>
            <p class="is-size-7">API</p>
            <p class="is-size-7">Status</p>
          </div>

          <div class="column is-one-quarter">
            <h5><strong>Legal</strong></h5>
            <p class="is-size-7">Privacy</p>
            <p class="is-size-7">Terms of Service</p>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="content hs-text-white has-text-centered">
              <p>
                <a href="https://synx.ai/maia" target="_blank"><img :src="`${publicPath}static/img/maia-logo-color.svg`" :srcset="`${publicPath}static/img/maia-logo-color.svg 2x`" alt="Maia Score" class="footer-logo"></a>
              </p>
              <p class="is-size-7">Maia Score SAPI de CV. All Rights Reserved &copy; 2020</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FootIndex',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
