<template>
        <div>
            <appheader></appheader>
            <router-view></router-view>
            <appfooter></appfooter>
        </div>
</template>

<script>
  import appheader from './common/Header.vue';
  import appfooter from './common/Footer.vue';
  export default {
    components: {
      appheader,appfooter
    }
  }

</script>

<style scoped>


</style>
