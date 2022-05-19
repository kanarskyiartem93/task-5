<template>
  <header-component></header-component>
  <product-list-basket :products="products"></product-list-basket>
</template>

<script>
import HeaderComponent from "@/components/Header";
import {mapGetters} from "vuex";
import ProductListBasket from "@/components/ProductListBasket";

export default {
  name: 'BasketView',
  components: {
    ProductListBasket,
    HeaderComponent
  },
  computed: {
    ...mapGetters({
      products: 'getProductsFromBasket'
    })
  }
}
</script>

<style scoped>

</style>