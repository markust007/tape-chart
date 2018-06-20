<template>
  <div class="datepicker">
    <v-menu
      ref="menu"
      :close-on-content-click="false"
      v-model="menu"
      :nudge-right="40"
      :return-value.sync="date"
      lazy
      transition="scale-transition"
      offset-y
      min-width="100px"
    >
      <v-text-field
        slot="activator"
        v-model="newDate"
        append-icon="event"
        :solo="true"
        :flat="true"
        readonly
      ></v-text-field>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
        <v-btn flat color="primary" @click="saveDate">OK</v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Datepicker',
  data () {
    return {
      date: null,
      menu: false
    }
  },
  computed: {
    newDate() {
      if(!this.date) {
        return moment().format('MMM Do YY');
      } else {
        // this.$emit('newDate', this.date)
        return moment(this.date).format('MMM Do YY');
      }
    }
  },
  methods: {
    saveDate() {
      this.$refs.menu.save(this.date)
      this.$emit('newDate', this.date)
    },
    left() {
      if(!this.date) {
        this.date = moment().subtract(7, 'days').format('YYYY-MM-DD')
      } else {
        this.date = moment(this.date).subtract(7, 'days').format('YYYY-MM-DD')
      }
    },
    right() {
      if(!this.date) {
        this.date = moment().add(7, 'days').format('YYYY-MM-DD')
      } else {
        this.date = moment(this.date).add(7, 'days').format('YYYY-MM-DD')
      }
    }
  },
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datepicker {
  width: 25%;
  text-align: left;
  border: 1px solid #e1e1e1;
}
</style>
