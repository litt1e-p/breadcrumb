<template>
  <div>
    <headView />
    <router-view></router-view>
  </div>
</template>

<script>

import headView from './headView'

export default {
  name: 'layout',
  components: {
    headView
  }
}
</script>

<style>

</style>
