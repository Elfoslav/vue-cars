<script setup>
import { RouterLink } from 'vue-router'
import CarForm from '../components/CarForm.vue'
import { useCars } from '@/stores/cars'
const cars = useCars()
</script>

<template>
  <main>
    <CarForm />
    <div v-for="car in cars.cars">
      {{ car.id + 1 }}:
      <RouterLink :to="{ name: 'car', params: { slug: car.slug }}">
        {{ car.brand }}, {{ car.year }}
      </RouterLink>
    </div>
  </main>
</template>

<style lang="scss">
main {
  margin-top: 10px;
}
</style>
