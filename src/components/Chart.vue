<template>
  <div class="calendar">
        <div class="calendar__header">
          <div>{{ newDate | moment('MMM D') }}</div>
          <div>{{ newDate | moment("add", "1 days", 'MMM D') }}</div>
          <div>{{ newDate | moment("add", "2 days", 'MMM D') }}</div>
          <div>{{ newDate | moment("add", "3 days", 'MMM D') }}</div>
          <div>{{ newDate | moment("add", "4 days", 'MMM D') }}</div>
          <div>{{ newDate | moment("add", "5 days", 'MMM D') }}</div>
          <div>{{ newDate | moment("add", "6 days", 'MMM D') }}</div>
        </div>
        <div class="calendar__week" v-for="(item, index) in units">
          <span v-for="(r, id) in res" v-if="r.unit == item && r.depart >= arrive && r.depart < leave" :style="[leftStyle(r.arrival), widthStyle(r.arrival, r.depart)]">
            {{r.customer}}
          </span>
          <div class="calendar__day day" v-for="day in days"></div>
        </div>
      </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Chart',
  data () {
    return {

    }
  },
  computed: {
    days() {
      let num;
      if(window.outerWidth < 480) {
        num = 4
      } else if(window.outerWidth < 768) {
        num = 5
      } else if(window.outerWidth < 1024) {
        num = 6
      } else {
        num = 7
      }
      let array = Array(num).fill().map((_, i) => i)
      return array
    },
    res() {
      return this.$store.state.reservation
    },
    newDate() {
      if(!this.date) {
        return moment().format('YYYY-MM-DD')
      } else {
        return this.date
      }
    },
    arrive() {
      let arrive = moment(this.newDate).format('YYYY-MM-DD')
      console.log(arrive)
      return arrive
    },
    leave() {
      let leaving = moment(this.newDate).clone().add(8, 'days').format('YYYY-MM-DD')
      console.log(leaving)
      return leaving;
    },
    style() {

    }
  },
  methods: {
    leftStyle(arrival) {
      switch(true) {
        case arrival < moment(this.newDate).format('YYYY-MM-DD'):
            return {left: '0%'}
            break;
        case arrival == moment(this.newDate).format('YYYY-MM-DD'):
            return {left: '5%'}
            break;
        case arrival == moment(this.newDate).clone().add(1, 'day').format('YYYY-MM-DD'):
            return {left: '20%'}
            break;
        case arrival == moment(this.newDate).clone().add(2, 'days').format('YYYY-MM-DD'):
            return {left: '33%'}
            break;
        case arrival == moment(this.newDate).clone().add(3, 'days').format('YYYY-MM-DD'):
            return {left: '48%'}
            break;
        case arrival == moment(this.newDate).clone().add(4, 'days').format('YYYY-MM-DD'):
            return {left: '60%'}
            break;
        case arrival == moment(this.newDate).clone().add(5, 'days').format('YYYY-MM-DD'):
            return {left: '75%'}
            break;
        case arrival == moment(this.newDate).clone().add(6, 'days').format('YYYY-MM-DD'):
            return {left: '90%'}
            break;
        default:
            console.log('none')
      }
    },
    widthStyle(arrival, depart) {
      let arr = moment(arrival)
      let dep = moment(depart)
      let first = moment(this.newDate)
      let duration = moment.duration(dep.diff(arr));
      let days = duration.asDays();
      let arrFormat = moment(arrival).format('YYYY, MM, DD')
      let firstFormat = moment(this.newDate).format('YYYY, MM, DD')
      let depFormat = moment(depart).format('YYYY, MM, DD')
      switch(true) {
        case arrFormat < firstFormat && firstFormat == depFormat:
            console.log('YES')
            return {width: '10%'}
            break;
        case days == 1:
            return {width: '18%'}
            break;
        case days == 2:
            return {width: '28%'}
            break;
        case days == 3:
            return {width: '40%'}
            break;
        case days == 4:
            return {width: '55%'}
            break;
        case days == 6:
            return {width: '70%'}
            break;
        case days == 7:
            return {width: '85%'}
            break;
        default:
            console.log('none')
      }
    }
  },
  mounted() {
    let first = moment(this.newDate)
    let end = moment(this.newDate).clone().add(1, 'day')
    var duration = moment.duration(end.diff(first));
    var hours = duration.asDays();
    console.log(hours)
    console.log(this.newDate)
  },
  props: ['date', 'units']
}
</script>

<style scoped>
.calendar{}

.calendar__week,
.calendar__header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.calendar__week {
  grid-auto-rows: 50px;
  text-align: right;
  position: relative;
}

.calendar__header {
  grid-auto-rows: 50px;
  align-items: center;
  text-align: center;
}

.calendar__day {
  padding: 16px;
}
.calendar {
  flex: 4;
  background-color: white;
  border: 1px solid #e1e1e1;
  overflow: hidden;
}

.calendar span {
  position: absolute;
  height: 30px;
  width: 25%;
  background: gray;
  top: 10px;
}

.calendar__header > div {
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
}

.calendar__day {
  border-right: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
}

.calendar__day:last-child {
  border-right: 0;
}
</style>
