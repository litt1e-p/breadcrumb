<template>
<div>
  <div v-breadcrumb="{separator: '>', paths: [{name: 'App', to: '/'}, {name: 'Module'}, {name: 'Index'},]}">breadcrumb func 1</div>
  <div v-breadcrumb="{paths: $route.matched}">breadcrumb func 2</div>
  <div v-breadcrumb>
    breadcrumb func 3
  </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>
