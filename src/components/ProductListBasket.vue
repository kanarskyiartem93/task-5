<template>
  <div>
    <div class="p-3">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Sum</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" :key="product.id">
          <product-card-basket :product="product.product" :quantity="product.quantity"/>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductCardBasket from "@/components/ProductCardBasket";
export default {
  name: "ProductListBasket",
  components: {ProductCardBasket},
  props: ['products']
}
</script>

<style scoped>

</style>