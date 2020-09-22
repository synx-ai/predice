<script>
  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins

  var renderChart = (context) => {

    context.receivedGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.receivedGradient.addColorStop(0, '#56C1FF');
    context.receivedGradient.addColorStop(1, '#6047B5');


    context.approvedGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.approvedGradient.addColorStop(0, '#CED7A9');
    context.approvedGradient.addColorStop(1, '#40DCC6');


    context.rejectedGradient = context.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 20, 500);

    context.rejectedGradient.addColorStop(0, '#F3ECC6');
    context.rejectedGradient.addColorStop(1, '#E78197');

    //renderChart function renders the chart with the datacollection and options object.
    context.renderChart({
      labels: context.approved,
      datasets: [{
          label: 'Recibidas',
          fill: false,
          pointBackgroundColor: context.receivedGradient,
          pointHitRadius: 8,
          borderWidth: 2,
          data: context.received,
          backgroundColor: context.receivedGradient,
          borderColor: context.receivedGradient
        }, {
          label: 'Aprobadas',
          fill: false,
          pointBackgroundColor: context.approvedGradient,
          pointHitRadius: 8,
          borderWidth: 2,
          data: context.approved,
          backgroundColor: context.approvedGradient,
          borderColor: context.approvedGradient
        }, {
          label: 'Rechazadas',
          fill: false,
          pointBackgroundColor: context.rejectedGradient,
          pointHitRadius: 8,
          borderWidth: 2,
          data: context.rejected,
          backgroundColor: context.rejectedGradient,
          borderColor: context.rejectedGradient
        }]
      },
      context.options
    )
  }
  //Exporting this so it can be used in other components
  export default {
    name: 'ApprovedChart',
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
      received: {
        type: Array,
        default: () => []
      },
      approved: {
        type: Array,
        default: () => []
      },
      rejected: {
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
                labelString: 'Solicitudes',
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
