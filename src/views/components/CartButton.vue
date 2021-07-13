<template>
  <button @click="$emit('click')">{{ type }}</button>
</template>

<script>
export default {
  //   data () {
  //   },
  name: "CardButton",
  props: {
    type: String,
  },
  emits: ["click"],
};
</script>
