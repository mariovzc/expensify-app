<template>
  <div>
    <header-app title="Gastos" action="true" @save="save" />
    <div class="container">
      <form id="form">
        <mt-field label="Fecha" :disableClear=true type="date" v-model="date"></mt-field> <br>
        <mt-field label="Concepto" v-model="concept"></mt-field> <br>
        <mt-field label="Cantidad" rows="10" type="number"  v-model="amount"></mt-field>
        <mt-radio
          title="Tipo"
          v-model="transaction_type_id"
          :options="options.types">
        </mt-radio>
        <mt-radio
          title="Categoria"
          v-model="category_id"
          :options="options.categories">
        </mt-radio>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/Header'
import options from '../store/defaults.js'
import { MessageBox, Indicator } from 'mint-ui'
import axios from 'axios'

export default {
  components: {
    HeaderApp
  },
  data () {
    return {
      concept: '',
      date: '',
      transaction_type_id: '',
      category_id: '',
      amount: '',
      options: options
    }
  },
  methods: {
    save () {
      if (this.concept === '' || this.date === '' || this.transaction_type_id === '' || this.category_id === '' || this.amount === '') {
        this.message('Error', 'Todos los campos deben ser rellenados')
      }
      else {
        Indicator.open({
          text: 'Creando...',
          spinnerType: 'fading-circle'
        })
        this.createExpense()
      }
    },
    message (title, message) {
      MessageBox({
        title: title,
        message: message,
        confirmButtonText: 'Ok'
      })
    },
    createExpense () {
      axios({
        method: 'post',
        url: 'https://mvzexpenses.herokuapp.com/api/v1/expenses',
        data: {
          concept: this.concept,
          date: this.date,
          transaction_type_id: this.transaction_type_id,
          amount: this.amount,
          category_id: this.category_id
        }
      })
        .then((response) => {
          Indicator.close()
          this.message('Alerta!', 'Gasto creado')
          this.concept = ''
          this.date = ''
          this.transaction_type_id = ''
          this.category_id = ''
          this.amount = ''
        })
        .catch(() => {
          this.message('Error!', 'No se pudo crear el gasto')
        })
    }
  }
}
</script>

<style lang="scss">
.container{
  margin-top: 4em;
  a {
    background-color: #504E66;
    color: #fff;
    .mint-cell-value input[type]{
      background-color: transparent;
      color: #fff;
    }
  }
  .mint-cell:last-child, .mint-cell-wrapper{
    background-image: none;
  }
  .mint-radiolist-title{
    font-size: 1.2em;
  }
}
</style>
