import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      options: {
        tooltips: {
          mode: 'index',
          intersect: true
        },
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    }
  },
  methods: {
    seeddata () {
      fetch('https://mvzexpenses.herokuapp.com/chart/accumulated')
        .then(response => response.json())
        .then(json => this.renderChart(json.data))
    }
  },
  mounted () {
    this.seeddata()
  }
}
