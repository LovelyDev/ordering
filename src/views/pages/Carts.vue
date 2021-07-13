<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>category</th>
        <th>Action</th>
      </tr>
      <tr v-for="(item, index) in carts" :key="`cart_${index}`">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.category }}</td>
        <td>
          <CardButton type="Remove" @click="removeFromCart(index)" />
        </td>
      </tr>
    </table>

    <h3>Categories</h3>
    <div v-for="(category, i) in categories" :key="`category_${i}}`">
      {{ category }}
    </div>
  </div>
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
  name: "carts",
  computed: {
    ...mapGetters({
      carts: "CARTS",
    }),
    categories: function() {
      let categories = [];
      let flag = [];
      let carts = this.$store.getters.CARTS;
      console.log("carsts", carts);
      for (let i = 0; i < carts.length; i++) {
        console.log("cart", flag[i], carts[i]);
        if (flag[i] === true) continue;
        const fe = carts[i];
        categories.push(fe.category);
        for (let j = i + 1; j < carts.length; j++) {
          console.log("cart", flag[j], carts[j]);
          if (flag[j] === true) continue;
          const ne = carts[j];
          if (fe.category === ne.category) flag[j] = true;
        }
      }
      return categories;
    },
  },
  methods: {
    removeFromCart: function(i) {
      console.log("selected item", this.carts[i]);
      this.$store.commit("REMOVE_CARTS", i);
    },
  },
};
</script>
