<template>
  <td>{{ product.id }}</td>
  <td>{{ product.title }}</td>
  <td>{{ product.description }}</td>
  <td>{{ product.price }}</td>
  <td><input @click="reduceCount" type="button" value="-"
             class="button-minus border rounded-circle icon-shape icon-sm mx-1 lh-0">
    <p style="display: inline">{{ countOfProduct }}</p>
    <input @click="addCount" type="button" value="+"
           class="button-plus border rounded-circle icon-shape icon-sm lh-0"></td>
  <td>{{ countOfProduct * product.price }}</td>
  <td><a @click="deleteProductFromBasket" href="#" class="btn btn-outline-danger">Delete</a></td>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "ProductCardBasket",
  data(){
    return {
      countOfProduct : this.quantity,
    }
  },
  props: ['product', 'quantity'],
  methods:{
    ...mapActions(['deleteFromBasket', 'addProductToBasket', 'reduceProductFromBasket']),
    deleteProductFromBasket(){
      this.deleteFromBasket({product: this.product})
    },
    addCount() {
      if (this.countOfProduct < this.product.count_on_storage) {
        this.countOfProduct++
        this.addProductToBasket({product: this.product, quantity: 1})
      }else {
        this.$moshaToast('Sorry, but on storage we have only ' + this.product.count_on_storage + ' of ' + this.product.title, {
          type: 'danger',
          showIcon: true
        })
      }
    },
    reduceCount() {
      if (this.countOfProduct > 1) {
        this.countOfProduct--
        this.reduceProductFromBasket({product: this.product, quantity: 1})
      }
    },
  },
}
</script>

<style scoped>

</style>