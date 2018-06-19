<template>
  <ul>
    <li>Units</li>
    <li v-for="(item, index) in units">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Units',
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  },
  props: ['units']
}
</script>

<style scoped>
ul {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #e1e1e1;
}
li {
  border-top: 1px solid #e1e1e1;
  display: grid;
  grid-auto-rows: 50px;
  align-items: center;
}
li:first-child {
  border-top: 0px solid #e1e1e1;
}
</style>
