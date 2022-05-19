<template>
  <header-component></header-component>
  <product-list :products="products"></product-list>
</template>

<script>
import ProductList from "@/components/ProductList";
import HeaderComponent from "@/components/Header";
import {mapGetters} from "vuex";

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    ProductList,
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  }
}
</script>

<style>
</style>
