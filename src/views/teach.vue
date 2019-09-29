<template>
  <div class="teach">
    <h1>{{count}}</h1>
    <h1>Bike counts:{{bikes}}</h1>
    <button @click="increment">Add count</button>
    <button @click="minus">Minus count</button>
    <button @click="borrowBike">Borrow bike</button>
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
    },
    borrowBike () {
      this.$store.commit('borrowBike')
    }
  },
  computed: {
    ...mapState({
      bikes: state => state.bikes
    })
  }
}
</script>
<style lang="scss">
.teach {
  button {
    width: 100px;
    height: 40px;
    background-color: #f60;
    color: #fff;
  }
}
</style>
