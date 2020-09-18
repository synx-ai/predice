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
          </div>

          <div class="column is-vcentered">
            <h1 class="is-size-1 has-text-white has-text-weight-bold synx-success">9</h1>
            <p class="is-size-6 has-text-white has-text-weight-light">Solicitudes Aprobadas</p>
          </div>

          <div class="column is-vcentered">
            <h1 class="is-size-1 has-text-white has-text-weight-bold synx-danger">6</h1>
            <p class="is-size-6 has-text-white has-text-weight-light">Solicitudes Rechazadas</p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>
