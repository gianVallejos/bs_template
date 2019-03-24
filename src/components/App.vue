<template lang="pug">
  div(id="app")
    DataHeader
    DataPortada
    DataServices
    VProjects
</template>

<script>

  import DataHeader from './DataHeader.vue'
  import DataPortada from './DataPortada.vue'
  import DataServices from './DataServices.vue'
  import VProjects from './VProjects.vue'

  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
      DataHeader,
      DataPortada,
      DataServices,
      VProjects
    }
  }
</script>

<style lang="stylus">

</style>

