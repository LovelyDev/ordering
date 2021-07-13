<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Category</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>{{ products[$route.params.id].id }}</td>
      <td>{{ products[$route.params.id].name }}</td>
      <td>{{ products[$route.params.id].price }}</td>
      <td>{{ products[$route.params.id].category }}</td>
      <td>{{ products[$route.params.id].description }}</td>
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
};
</script>
