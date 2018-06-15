<template>
  <Datepicker :date="date"></Datepicker>
</template>

<script>
import Datepicker from '../components/Datepicker'
export default {
  name: 'TapeChart',
  data () {
    return {
      date: null,
    }
  },
  components: {
    Datepicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
