<template>
  <div class="main-wrapper">

    <section class="section">
      <div class="container synx-panel">
        <h3 class="is-size-3 has-text-white has-text-weight-bold">Documentación</h3>
        <h5 class="is-size-5 has-text-white has-text-weight-light">Previsualización de la respuesta de los modelos</h5>
        <div class="columns">
          <div class="column">
            <div class="dark-border-wrap">
              <div class="synx-gray-background">
              </div>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div id="swagger-ui"></div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import SwaggerUI from 'swagger-ui'

export default {
  name: 'Index',
  mounted: () => {
    SwaggerUI({
      url: "/specs/swagger.yaml",
      dom_id: '#swagger-ui'
    })
  }
}
</script>

<style scoped>
@import '../assets/css/swagger-ui.css';
</style>
