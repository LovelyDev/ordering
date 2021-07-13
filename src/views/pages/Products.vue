<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
    <tr v-for="(item, index) in products" :key="`product_${item.id}`">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <CardButton type="Add" @click="addToCart(index)" />
      </td>
    </tr>
  </table>
</template>
<script>
import { mapGetters } from "vuex";
import CardButton from "../components/CartButton.vue";
export default {
  components: {
    CardButton,
  },
  data() {
    return {};
  },
  name: "products",
  computed: {
    ...mapGetters({
      products: "PRODUCTS",
    }),
  },
  methods: {
    addToCart: function(i) {
      console.log("selected item", this.products[i]);
      this.$store.commit("ADD_CARTS", this.products[i]);
    },
  },
};
</script>
