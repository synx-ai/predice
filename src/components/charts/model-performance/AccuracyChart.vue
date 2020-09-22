<script>
  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins

  var renderChart = (context) => {

    context.accuracyGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.accuracyGradient.addColorStop(0, '#56C1FF');
    context.accuracyGradient.addColorStop(1, '#6047B5');


    context.precissionGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.precissionGradient.addColorStop(0, '#CED7A9');
    context.precissionGradient.addColorStop(1, '#40DCC6');


    //renderChart function renders the chart with the datacollection and options object.
    context.renderChart({
      labels: context.accuracy,
      datasets: [{
          label: 'Accuracy',
          fill: false,
          pointBackgroundColor: context.accuracyGradient,
          pointHitRadius: 8,
          borderWidth: 2,
          data: context.accuracy,
          backgroundColor: context.accuracyGradient,
          borderColor: context.accuracyGradient
        }, {
          label: 'Precission',
          fill: false,
          pointBackgroundColor: context.precissionGradient,
          pointHitRadius: 8,
          borderWidth: 2,
          data: context.precission,
          backgroundColor: context.precissionGradient,
          borderColor: context.precissionGradient
        }]
      },
      context.options
    )
  }
  //Exporting this so it can be used in other components
  export default {
    name: 'AccuracyChart',
    extends: Line,
    mixins: [reactiveProp],
    props: {
      labels: {
        type: Array,
        default: () => []
      },
      chartconfig: {
        type: Object,
        default: () => {
        }
      },
      accuracy: {
        type: Array,
        default: () => []
      },
      precission: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        //Chart.js options that controls the appearance of the chart
        options: {
          layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
          },
          tooltips: {
            enabled: true
          },
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                display: true,
                beginAtZero: true
              },
              gridLines: {
                display: true,
                color: '#2d2d2d',
                zeroLineColor: '#2d2d2d'
              },
              scaleLabel: {
                display: true,
                labelString: 'Learning Rate',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif'
              }
            }],
            xAxes: [ {
              ticks: {
                display: true,
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: false,
                labelString: 'Days transcurred since outbreak',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
                padding: 10
              }
            }]
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 20,
              fontColor: '#fff',
              filter: (item) => {
                return !item.text.includes('IC');
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false
        },
        gradient: null,
      }
    },
    mounted () {
      renderChart(this);
    }
  }
</script>
