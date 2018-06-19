<template>
  <div>
    <Datepicker :date="date"></Datepicker>
    <div class="chart">
      <Units :units="units"></Units>
      <Chart :date="date" :units="units">
        <!-- <Booking></Booking> -->
      </Chart>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from '../components/Datepicker'
import Units from '../components/Units'
import Chart from '../components/Chart'
import Booking from '../components/Booking'
export default {
  name: 'TapeChart',
  data () {
    return {
      date: null,
      units: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8']
    }
  },
  components: {
    Datepicker, Units, Chart, Booking
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
