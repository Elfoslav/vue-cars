<script>
import { storeToRefs } from 'pinia'
import { useCars } from '@/stores/cars'
const cars = useCars()
const { getCarBySlug } = storeToRefs(cars)
export default {
  data() {
    return {
      brand: null,
      year: null,
    }
  },

  computed: {
    slug() {
      return this.$route.params.slug;
    },
    car() {
      return getCarBySlug.value(this.$route.params.slug);
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<template>
  <div class="car">
    <h3>{{ car?.brand }}</h3>
    <div>{{ car?.year }}</div>
    <button @click="goBack">Back</button>
  </div>
</template>

<style>
.car {
  text-align: center;
}
</style>
