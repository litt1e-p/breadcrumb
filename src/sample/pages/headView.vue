<template>
<div>
  <div v-breadcrumb>
    headView component dynamic changing breadcrumb with route
  </div>
  <div v-breadcrumb:[headBreadcrumb]>
    headView component dynamic changing breadcrumb with data
    <button @click.stop="change">change breadcrumb data</button>
  </div>

</div>
  
</template>

<script>

export default {
  name: 'headView',
  data () {
    return {
      headBreadcrumb: void 0
    }
  },
  mounted () {
    this.change()
  },
  methods: {
    change () {
      this.headBreadcrumb = {paths: [{name: 'App'}, {name: 'Module'}, {name: 'Layout'}, {name: 'HeadView'}, {name: Math.random().toFixed(3)}]}
    }
  }
}

</script>

<style>

</style>
