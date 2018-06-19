<template>
  <div class="calendar">
        <div class="calendar__header">
          <div>{{ newDate }}</div>
          <div>{{ newDate }}</div>
          <div>{{ newDate }}</div>
          <div>{{ newDate }}</div>
          <div>{{ newDate }}</div>
          <div>{{ newDate }}</div>
          <div>{{ newDate }}</div>
        </div>
        <div class="calendar__week" v-for="(item, index) in units">
          <span v-for="(r, id) in res" v-if="r.unit == item">
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
      let array = []
      let num;
      if(window.screen.width < 480) {
        num = 4
      } else if(window.screen.width < 768) {
        num = 5
      } else if(window.screen.width < 1024) {
        num = 6
      } else {
        num = 7
      }
      let i;
      for (i = 0; i < num; i++) {
          array[i] = 'unit'
      }
      console.log(array)
      return array
    },
    res() {
      return this.$store.state.reservation
    },
    newDate() {
      if(!this.date) {
        return moment().format('MMM D');
      } else {
        return moment(this.date).format('MMM D');
      }
    }
  },
  methods: {

  },
  mounted() {

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
  background-color: white;
  border: 1px solid #e1e1e1;
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
