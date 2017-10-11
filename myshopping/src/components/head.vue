<template>
  <div class="head">

    <router-link :to="{path:'/'}">
      <button class="btn">导航1</button>
    </router-link>

    <router-link :to="{path:'/nav2'}">
      <button class="btn">导航2</button>
    </router-link>



  </div>
</template>

<script>

  export default {
      name:"head",
      data(){
          return {
              msg:"按钮"
          }
      }

  }

</script>

<style scoped>

  .head{
    width: 100%;
    height: 100px;
    background: greenyellow;
  }

</style>
