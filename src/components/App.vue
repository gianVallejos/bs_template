<template lang="pug">
  div(id="app")
    DataHeader
    DataPortada
    DataServices
    DataProjects
    DataClients
    DataTeam
    DataContact
    DataAddress
    DataFooter
</template>

<script>

  import DataHeader from './DataHeader.vue'
  import DataPortada from './DataPortada.vue'
  import DataServices from './DataServices.vue'
  import DataProjects from './DataProjects.vue'
  import DataClients from './DataClients.vue'
  import DataTeam from './DataTeam.vue'
  import DataContact from './DataContact.vue'
  import DataAddress from './DataAddress.vue'
  import DataFooter from './DataFooter.vue'

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
      DataProjects,
      DataClients,
      DataTeam,
      DataContact,
      DataAddress,
      DataFooter
    }
  }
</script>

<style lang="stylus">

</style>

