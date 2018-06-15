<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-right="40"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="newDate"
      append-icon="event"
      :solo="true"
      :solo-inverted="true"
      :flat="true"
      readonly
    ></v-text-field>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Datepicker',
  data () {
    return {
      menu: false
    }
  },
  computed: {
    newDate() {
      if(!this.date) {
        return moment().format('MMM Do YY');
      } else {
        return moment(this.date).format('MMM Do YY');
      }
    }
  },
  props: ['date']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
