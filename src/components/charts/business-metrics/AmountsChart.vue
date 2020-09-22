<script>
import { Bar } from 'vue-chartjs'

var renderChart = (context) => {
  context.colorGradient = context.$refs.canvas
    .getContext("2d")
    .createLinearGradient(0, 0, 20, 500);

  context.colorGradient.addColorStop(0, context.colorA);
  context.colorGradient.addColorStop(1, context.colorB);

  context.renderChart({
      labels: context.chartData,
      datasets: [
        {
          label: 'Data One',
          data: context.chartData,
          backgroundColor: context.colorGradient,
          borderColor: context.colorGradient
        }
      ]
    },
    context.options)
}

export default {
  extends: Bar,
  props: {
    colorA: {
      type: String,
      default: () => '#56C1FF'
    },
    colorB: {
      type: String,
      default: () => '#6047B5'
    },
    height: {
      type: Number,
      default: () => null
    },
    width: {
      type: Number,
      default: () => null
    },
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
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
            labelString: 'Montos',
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
    }
  }),
  mounted () {
    renderChart(this)
  }
}
</script>
