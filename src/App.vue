<script setup>
import NavBar from './components/navbar/NavBar.vue'
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
  </RouterView>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
