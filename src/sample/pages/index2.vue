<template>
  <div class="main" v-breadcrumb>
    index2
    <button @click.stop="goto">goto Index</button>
  </div>
</template>

<script>

export default {
  name: 'index2',
  methods: {
    goto () {
      this.$router.push({
        name: 'index'
      })
    }
  }
}

</script>

<style >

</style>
