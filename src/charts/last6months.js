import { Bar } from 'vue-chartjs'
import { Indicator } from 'mint-ui'

export default {
  extends: Bar,
  data () {
    return {
      options: {
        legend: {
          labels: {
            fontColor: '#fff'
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: '#fff'
            },
            stacked: true,
            stepSize: 1
          }],
          yAxes: [{
            ticks: {
              fontColor: '#fff'
            },
            stacked: true,
            stepSize: 1
          }]
        }
      }
    }
  },
  methods: {
    seeddata () {
      fetch('https://mvzexpenses.herokuapp.com/chart/transaction')
        .then(response => response.json())
        .then((json) => {
          Indicator.close()
          this.renderChart(json.data, this.options)
        })
    }
  },
  mounted () {
    this.seeddata()
  },
  beforeMount () {
    Indicator.open()
  }
}
