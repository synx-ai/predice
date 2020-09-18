<template>
  <div class="main-wrapper">
        <section class="section">
          <div class="container">
            <h3 class="is-size-3 has-text-white has-text-weight-bold">RESTful API Backend Documentation</h3>
            <h5 class="is-size-5 has-text-white has-text-weight-light">Synx Machine Learning Platform</h5>
            <div class="columns">
              <div class="column">
                <div class="dark-border-wrap">
                  <div class="synx-gray-background">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">

            <div class="columns">
              <div class="column">
                <div id="swagger-ui"></div>
              </div>
            </div>

          </div>
        </section>

        <div class="footer-border-wrap">
          <footer class="footer synx-dark-background">
            <div class="content has-text-centered has-text-light">
              <p>
                <a href="https://synx.ai" target="_blank"><img src="/synx-logo.svg" class="footer-logo"></a>
              </p>

            </div>
          </footer>
        </div>


  </div>
</template>

<script>
import SwaggerUI from 'swagger-ui'

export default {
  name: 'Index',
  mounted: () => {
    SwaggerUI({
      url: "/specs/openapi-v1.yml",
      dom_id: '#swagger-ui'
    })
  }
}
</script>

<style scoped>
@import '../assets/css/swagger-ui.css';
</style>
