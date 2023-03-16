<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    </div>

    <div class="wrapper center">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        |
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}
.container {
  width: 200px;
  margin: auto;
}
</style>
