<script>
  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins

  var renderChart = (context) => {

    context.colorGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.colorGradient.addColorStop(0, context.colora);
    context.colorGradient.addColorStop(1, context.colorb);

    //renderChart function renders the chart with the datacollection and options object.
    context.renderChart({
      labels: [123, 12,242,52,3,23,123,123,0,23],
      datasets: [{
          //...context.chartconfig,
          label: '',
          fill: false,
          pointBackgroundColor: context.colorGradient,
          pointHitRadius: 8,
          borderWidth: 2,
          data: context.chartdata,
          backgroundColor: context.colorGradient,
          borderColor: context.colorGradient
        }]
      },
      context.options
    )
  }
  //Exporting this so it can be used in other components
  export default {
    name: 'InlineChart',
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
      colora: {
        type: String,
        default: () => "#56C1FF"
      },
      colorb: {
        type: String,
        default: () => "#6047B5"
      },
      chartdata: {
        type: Object,
        default: () => []
      }
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
            enabled: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                display: false,
                beginAtZero: true
              },
              gridLines: {
                display: false,
                color: '#2d2d2d',
                zeroLineColor: '#2d2d2d'
              },
              scaleLabel: {
                display: false,
                labelString: 'Population %',
                fontFamily: 'Avenir, Helvetica, Arial, sans-serif'
              }
            }],
            xAxes: [ {
              ticks: {
                display: false,
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
            display: false,
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
