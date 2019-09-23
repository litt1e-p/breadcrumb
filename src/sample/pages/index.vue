<template>
<div>
  <div v-breadcrumb="{separator: '>', paths: [{name: 'App', to: '/'}, {name: 'Module'}, {name: 'Index'},]}">breadcrumb func 1</div>
  <div v-breadcrumb="{paths: $route.matched}">breadcrumb func 2</div>
  <div v-breadcrumb>
    breadcrumb func 3
  </div>
  <div v-breadcrumb:[breadcrumb]>
    breadcrumb func 4
    <button @click.stop="change">change breadcrumb</button>
  </div>
</div>
    
</template>

<script>
export default {
  data () {
    return {
      breadcrumb: void 0
    }
  },
  methods: {
    change () {
      this.breadcrumb = {paths: [{name: 'App'}, {name: 'Module'}, {name: Math.random().toFixed(3)}]}
    }
  }
}
</script>

<style>

</style>
