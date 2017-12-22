import { Line } from 'vue-chartjs'
import { Indicator } from 'mint-ui'

export default {
  extends: Line,
  data () {
    return {
      options: {
        legend: {
          labels: {
            fontColor: '#fff'
          }
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          animateScale: true,
          animateRotate: true
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
      fetch('https://mvzexpenses.herokuapp.com/chart/accumulated')
        .then(response => response.json())
        .then((json) => {
          this.renderChart(json.data, this.options)
          Indicator.close()
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
