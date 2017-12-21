import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      options: {
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
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    }
  },
  methods: {
    seeddata () {
      fetch('https://mvzexpenses.herokuapp.com/chart/transaction')
        .then(response => response.json())
        .then(json => this.renderChart(json.data))
    }
  },
  mounted () {
    this.seeddata()
  }
}
