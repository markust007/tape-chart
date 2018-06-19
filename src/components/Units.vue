<template>
  <ul>
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

</style>
