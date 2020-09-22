<template>
  <div class="content-wrapper">

    <section class="section">
      <div class="container synx-panel">

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <h5 class="is-size-5 has-text-white has-text-weight-bold">Model Performance</h5>
          </div>
        </div>

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <AccuracyChart :style="'max-width: 100%; margin: auto'" 
                         :accuracy="[56,25,46,35,113,80,28,345,32]"
                         :precission="[123,12,242,52,3,23,123,32,464]"
                         />
          </div>
        </div>

        <div class="columns is-vcentered is-centered v-space-3">
          <div class="column is-vcentered">
            <table class="table synx-dark">
              <tbody>
                <tr>
                  <td>Accuracy</td>
                  <td class="has-text-center">87.5%</td>
                </tr>
                <tr>
                  <td>Precission</td>
                  <td class="has-text-center">90.0%</td>
                </tr>
                <tr>
                  <td>Mean Absolute Error</td>
                  <td class="has-text-center">12.5</td>
                </tr>
                <tr>
                  <td>Root Mean Squared Error</td>
                  <td class="has-text-center">2.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import AccuracyChart from '@/components/charts/model-performance/AccuracyChart'

export default {
  name: 'ModelPerformance',
  components: {
    AccuracyChart
  }
}
</script>
