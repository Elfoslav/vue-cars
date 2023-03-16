import { defineStore } from 'pinia'

export const useCars = defineStore('cars', {
  state: () => ({
    /** @type {{ id: number, brand: string, year: number, slug: string }[]} */
    cars: [],
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    getCarBySlug(state) {
      return (slug) => state.cars.find((car) => car.slug === slug);
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addCar({ brand, year }) {
      // you can directly mutate the state
      const slug = brand.replaceAll(' ', '-').toLowerCase();
      this.cars.push({ id: this.nextId++, brand, year, slug })
    },
  },
})
