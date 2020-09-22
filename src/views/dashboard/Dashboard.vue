<template>
  <div class="content-wrapper">

    <section class="section">
      <div class="container synx-panel">

        <div class="columns is-vcentered is-centered has-text-centered v-space-3">
          <div class="column is-vcentered">
            <h3 class="is-size-3 has-text-white has-text-weight-bold">Solicitudes de hoy</h3>
            <p class="is-size-7 has-text-white has-text-weight-light">Consulta las métricas de negocio para revisar más detalles.</p>
          </div>
        </div>

        <div class="columns is-vcentered is-centered has-text-centered v-space-3">
          <div class="column is-vcentered">
            <h1 class="is-size-1 has-text-white has-text-weight-bold synx-info">15</h1>
            <p class="is-size-6 has-text-white has-text-weight-light">Solicitudes Recibidas</p>
            <div class="inline-chart">
              <InlineChart :style="'height: 48px; max-width: 180px; margin: auto'" :colora="'#56C1FF99'" :colorb="'#6047B599'"
                           :chartdata="[56,25,46,35,113,80,28,345,32]"/>
            </div>
          </div>

          <div class="column is-vcentered">
            <h1 class="is-size-1 has-text-white has-text-weight-bold synx-success">9</h1>
            <p class="is-size-6 has-text-white has-text-weight-light">Solicitudes Aprobadas</p>
            <div class="inline-chart">
              <InlineChart :style="'height: 48px; max-width: 180px; margin: auto'" :colora="'#16E7CF99'" :colorb="'#73FDEA99'"
                           :chartdata="[123,12,242,52,3,23,123,32,464]"/>
            </div>
          </div>

          <div class="column is-vcentered">
            <h1 class="is-size-1 has-text-white has-text-weight-bold synx-danger">6</h1>
            <p class="is-size-6 has-text-white has-text-weight-light">Solicitudes Rechazadas</p>
            <div class="inline-chart">
              <InlineChart :style="'height: 48px; max-width: 180px; margin: auto; padding: 0'" :colora="'#EF5FA799'" :colorb="'#FF8DC699'"
                           :chartdata="[78,56,242,95,34,44,55,234,53]"/>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import InlineChart from '@/components/InlineChart'

export default {
  name: 'Dashboard',
  components: {
    InlineChart
  }
}
</script>
