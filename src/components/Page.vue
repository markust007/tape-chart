<template>
  <div class="text-xs-center">
    <button @click="$emit('left')"><v-icon>keyboard_arrow_left</v-icon></button>
    <button @click="$emit('right')"><v-icon>keyboard_arrow_right</v-icon></button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
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
  props: []
}
</script>

<style scoped>

</style>
