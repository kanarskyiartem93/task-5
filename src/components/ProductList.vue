<template>
  <main>
    <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
      <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        <product-card class="col" v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "ProductList",
  props: ['products'],
  components: {
    ProductCard,
  },
}
</script>

<style scoped>

</style>