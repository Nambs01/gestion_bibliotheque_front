<template>
  <div class="wrapper">
    <SideBar />
    <div class="content">
      <RouterView class="routerView"/>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
</script>

<style>
.sideBar{
  width: 20%;
  float: left;
}

.content{
  width: 80%;
  float: left;
  padding: 20px;
  background-color: rgb(249, 242, 226);
  height: 100vh;
  overflow-y: auto;
}

.routerView{
  background-color: white;
}
</style>
