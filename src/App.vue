<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #9381FF;
}

.main-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #110f1d;
    }

.global-button{
  display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #9381FF; 
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none; 
    cursor: pointer;
    transition: background-color 0.3s;
}

</style>
