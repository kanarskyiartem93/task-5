<template>
  <header-component></header-component>
  <product-list :products="products"></product-list>
</template>

<script>
import HeaderComponent from "@/components/Header";
import ProductList from "@/components/ProductList";
import {mapGetters} from "vuex";

export default {
  name: "FavoriteView",
  components: {
    HeaderComponent,
    ProductList
  },
  computed: {
    ...mapGetters({
      products: 'getProductsFavorite'
    })
  }
}
</script>

<style scoped>

</style>