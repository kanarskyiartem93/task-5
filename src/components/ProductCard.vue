<template>
  <div class="card h-100 shadow-sm">
    <div class="d-flex justify-content-between">
      <button class="border-0 bg-transparent">
        <i v-if="isFavorite" @click="removeFromFavorite" class="fas fa-heart"></i>
        <i v-else @click="addToFavorite" class="far fa-heart"></i>
      </button>
    </div>
    <img :src="product.image" class="card-img-top" alt="...">
    <div class="card-body">
      <div class="clearfix mb-3"><span
          class="float-start badge rounded-pill bg-primary">{{ product.title }}</span> <span
          class="float-end price-hp">{{ product.price }}&euro;</span></div>
      <h5 class="card-title">{{ product.description }}</h5>
      <div class="text-center my-4">
        <div class="d-flex justify-content-between">
          <div>
            <p class="text-dark">Quantity</p>
          </div>
          <div class="input-group justify-content-end align-items-center">
            <input @click="reduceCount" type="button" value="-"
                   class="button-minus border rounded-circle icon-shape icon-sm mx-1 lh-0">
            <p class="quantity-field border-0 text-center w-25">{{ count }}</p>
            <input @click="addCount" type="button" value="+"
                   class="button-plus border rounded-circle icon-shape icon-sm lh-0">
          </div>
        </div>
        <a href="#" class="btn btn-warning" @click="addProductBasket">Add to basket</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "ProductList",
  data() {
    return {
      count: 1,
    }
  },
  props: ["product"],
  computed: {
    ...mapGetters({
      isFavoriteProduct: 'isFavorite',
      getQuantityInBasket: 'getQuantityInBasket'
    }),
    isFavorite: function () {
      return this.isFavoriteProduct(this.product)
    },
    quantity: function (){
      return this.getQuantityInBasket(this.product)
    }
  },
  methods: {
    ...mapActions(['addProductToBasket', 'addProductToFavorite']),
    addProductBasket() {
      let orderCount = this.count + this.quantity
      if (orderCount <= this.product.count_on_storage) {
        this.addProductToBasket({product: this.product, quantity: this.count})
        // this.quantity = this.getQuantityInBasket(this.product)
        this.$moshaToast('You add to basket ' + this.count + ' ' + this.product.title, {type: 'success', showIcon: true})
        orderCount === this.product.count_on_storage ? this.count = 0 : this.count = 1
      }else {
        this.$moshaToast('Sorry, but on storage we have only ' + this.product.count_on_storage + ' of ' +this.product.title, {type: 'danger', showIcon: true})
      }
    },
    addCount() {
      let orderCount = this.count + this.quantity

      if (orderCount < this.product.count_on_storage) {
        this.count++
      }else {
        this.$moshaToast('Sorry, but on storage we have only ' + this.product.count_on_storage + ' of ' + this.product.title, {
          type: 'danger',
          showIcon: true
        })
      }
    },
    reduceCount() {
      if (this.count > 1) {
        this.count--
      }
    },
    addToFavorite() {
      this.addProductToFavorite({product: this.product, isFavorite: true})
    },
    removeFromFavorite() {
      this.addProductToFavorite({product: this.product, isFavorite: false})
    },
  },
}
</script>

<style scoped>

</style>