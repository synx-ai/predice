<template>
  <div class="content-wrapper">

    <section class="section">
      <div class="container synx-panel">

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <h5 class="is-size-5 has-text-white has-text-weight-bold">Solicitudes de crédito</h5>
          </div>
        </div>

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <ApprovedChart :style="'max-width: 100%; margin: auto'" :colora="'#56C1FF99'" :colorb="'#6047B599'"
                         :received="[56,25,46,35,113,80,28,345,32]"
                         :approved="[123,12,242,52,3,23,123,32,464]"
                         :rejected="[78,56,242,95,34,44,55,234,53]"
                         />
          </div>
        </div>

        <div class="columns is-vcentered is-centered v-space-3">
          <div class="column is-vcentered">
            <table class="table synx-dark">
              <tbody>
                <tr>
                  <th class="has-text-white">Periodo <strong class="has-text-white">01/Oct - 07/Oct</strong></th>
                  <th></th>
                </tr>
                <tr>
                  <td>Solicitudes recibidas</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>Solicitudes aprobadas</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>Solicitudes rechazadas</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>Solicitudes rechazadas por KYC/PLD</td>
                  <td>38</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div class="columns is-vcentered is-centered v-space-1">
          <div class="column is-vcentered">
            <div class="dark-border-wrap">
              <div class="synx-gray-background">
              </div>
            </div>
          </div>
        </div>


        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <h5 class="is-size-5 has-text-white has-text-weight-bold">Montos otorgados</h5>
          </div>
        </div>

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered" style="height: 380px">
            <AmountsChart :style="'height: 300px; max-width: 100%'" :color-a="'#56C1FF'" :color-b="'#6047B5'"
                          :chart-data="[56,25,146,35,113,80,128,345,32]"
                          />
          </div>
        </div>

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <table class="table synx-dark">
              <tbody>
                <tr>
                  <td>&lt;$10,000</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>&lt;$10,001 - $20,000</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>&lt;$20,001 - $30,000</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>&gt;$30,001</td>
                  <td>38</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="columns is-vcentered is-centered v-space-1">
          <div class="column is-vcentered" style="height: 380px">
            <AmountsChart :style="'height: 300px; max-width: 100%'" :color-a="'#CED7A9'" :color-b="'#40DCC6'"
                          :chart-data="[56,146,230,34,23,80,87,233,32]"
                          />
            <p class="has-text-centered has-text-white is-size-7">Créditos al corriente</p>
          </div>

          <div class="column is-vcentered" style="height: 380px">
            <AmountsChart :style="'height: 300px; max-width: 100%'" :color-a="'#F3ECC6'" :color-b="'#E78197'"
                          :chart-data="[25,25,344,35,345,80,128,56,32]"
                          />
            <p class="has-text-centered has-text-white is-size-7">Créditos atrasados</p>
          </div>
        </div>

        <div class="columns is-vcentered is-centered">
          <div class="column is-vcentered">
            <table class="table synx-dark">
              <tbody>
                <tr>
                  <td>Créditos atrasados</td>
                  <td>16</td>
                </tr>
                <tr>
                  <td>Créditos al corriente</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Posible daño patrimonial</td>
                  <td>$97,000,000</td>
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
import ApprovedChart from '@/components/charts/business-metrics/ApprovedChart'
import AmountsChart from '@/components/charts/business-metrics/AmountsChart'

export default {
  name: 'BusinessMetrics',
  components: {
    ApprovedChart,
    AmountsChart
  }
}
</script>
