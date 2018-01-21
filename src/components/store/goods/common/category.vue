<template>
    <div>
        <a href="/goods/43.html" v-for='item in list' :key='item.id'>{{item.title}}
            <app-category v-if='item.subcates && item.subcates.length !=0' :list='item.subcates'></app-category>
        </a>
        
    </div>
</template>

<script>
export default {
  name: "app-category",
  props: ["list"]
};
</script>

<style scoped>

</style>