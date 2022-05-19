<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link">Home</router-link>
          <router-link to="/basket" class="nav-tem nav-link">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="m-2">{{ basketCount }}</span>
          </router-link>
          <router-link to="/favorite" class="nav-tem nav-link">
            <i class="fa-solid fa-star"></i>
            <span class="m-2">{{ favoriteCount }}</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "HeaderComponent",
  mounted() {
    this.getAllProducts()
    this.getFavoriteProductsFromDB()
  },
  computed: {
    ...mapGetters({
      basketCount: 'basketCountProducts',
      favoriteCount: 'favoriteProductsCount'
    })
  },
  methods: {
    ...mapActions(['getAllProducts', 'getFavoriteProductsFromDB']),
  }

}
</script>

<style scoped>
.vue-active-link {
  color: white !important;
}
</style>