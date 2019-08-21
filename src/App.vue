<template>
  <div id="app">
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.clearfix::after{
  display: block;
  content: "";
  clear: both;
}

</style>
