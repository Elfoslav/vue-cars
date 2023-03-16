<script>
import { useCars } from '@/stores/cars'
export default {
  data() {
    return {
      brand: null,
      year: null,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const cars = useCars();

      if (!this.brand) {
        alert('Fill in car brand');
        return this.$refs.brand.focus();
      }

      if (!this.year) {
        alert('Fill in car year');
        return this.$refs.year.focus();
      }

      cars.addCar({ brand: this.brand, year: this.year });
      this.resetForm();
    },
    resetForm() {
      this.brand = null;
      this.year = null;
    },
  }
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="form-control">
      <input ref="brand" type="text" name="brand" placeholder="Car brand" v-model="brand" />
    </div>
    <div class="form-control">
      <input ref="year" type="number" name="year" placeholder="Year" v-model="year" />
    </div>
    <div class="form-control">
      <input type="submit" name="submit" value="Submit" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .form-control {
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 5px;
    border-radius: 4px;
  }
</style>
