<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Bike counts:{{bikes}}</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'teach',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    },
    minus () {
      this.count--
    }
  },
  computed: {
    ...mapState({
      bikes: state => state.bikes
    })
  }
}
</script>
