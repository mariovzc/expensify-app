import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        pieceLabel: {
          fontColor: '#FFF'
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function label (tooltipItems, data) {
              return formatter.format(data.datasets[0].data[tooltipItems.index])
            }
          }
        }
      }
    }
  },
  methods: {
    seeddata () {
      fetch('https://mvzexpenses.herokuapp.com/chart/categories')
        .then(response => response.json())
        .then(json => this.createChart(json.categories))
    },
    createChart (data) {
      let d = {
        datasets: [{
          data: data.values,
          backgroundColor: data.backgroundColors
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: data.labels
      }
      this.renderChart(d, this.options)
    }
  },
  mounted () {
    this.seeddata()
  }
}

let formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 2
  // the default value for minimumFractionDigits depends on the currency
  // and is usually already 2
})
