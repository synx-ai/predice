<template>
  <div class="content-wrapper">
    <section class="section hero">
      <div class="container">

        <div class="columns is-vcentered">
          <div class="column is-vcentered is-one-third">
            <img src="../assets/img/hero.png" alt="Maia Score" >
          </div>
          <div class="column is-vcentered">
            <h1 class="is-size-1 has-text-white has-text-weight-bold">Predict the future of your sales.</h1>
            <h5 class="is-size-5 has-text-white has-text-weight-light">Sales forecasting and demand sensing without hastle.</h5>
            <br>
            <div class="columns">
              <div class="column">
                <div class="field is-grouped">
                  <p class="control">
                    <a :href="`${publicPath}dashboard`" class="button is-normal is-synx-primary">Request a Demo</a>
                  </p>
                  <p class="control">
                    <button class="button is-normal is-synx-link">
                      Learn more &rarr;
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="at-scale" :style="`background-image: url('${publicPath}static/img/at-scale.svg');`"></div>

      </div>
    </section>

    <section>
      <div class="container">

        <div class="columns is-vcentered v-space-3">
          <div class="column is-vcentered is-8 is-offset-1">
            <p class="is-size-3 has-text-white is-bold">Understand your data to take informed decisions.</p>
          </div>
        </div>

        <div class="columns is-vcentered v-space-3">
          <div class="column is-vcentered is-8 is-offset-2">
            <p class="is-size-5 has-text-white">Futurium helps you to improve your current sales forecasting, and assist you in taking informed decisions out of your own data and past sales.</p>
            <br><br>
            <img src="../assets/img/benefits.png">
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="container">

        <div class="columns is-vcentered v-space-3">
          <div class="column is-vcentered is-8 is-offset-1">
            <p class="is-size-3 has-text-white is-bold">From zero to predictions in three months.</p>
          </div>
        </div>

        <div class="columns is-vcentered v-space-3">
          <div class="column is-vcentered is-8 is-offset-2">
            <p class="is-size-5 has-text-white">Implementing AI shouldn't be hard and expensive, our process ensures to train, develop and integrate Machine Learning in just 12 weeks.</p>
            <br><br>
            <img src="../assets/img/process.png">
          </div>
        </div>

      </div>
    </section>

    <section class="call-to-action">
      <div class="container">

        <div class="columns is-vcentered v-space-3">
          <div class="column is-vcentered is-8 is-offset-1">
            <p class="is-size-3 has-text-white is-bold">Get smarter today and <a :href="`${publicPath}dashboard`">request a demo &rarr;</a></p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
