<template>
  <div>
    <h1>Actions page</h1>
    <h3>count is: {{ count }}</h3>
    <button @click="a_increment()">Normal Action increment</button>
    <button @click="a_decrement()">Normal Action decrement</button>
    <button @click="m_increment()">Dispatch Action increment</button>
    <button @click="m_decrement()">Dispatch Action decrement</button>
    <button @click="decrementFromMutations()">Decrement from Mutations</button>
    <button @click="a_increment_By(5)">Increment By 5</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ActionPage",
  computed: {
    ...mapState(["count"]),
    // ...mapMutations(["decrement"]),
  },
  methods: {
    ...mapActions(["a_increment", "a_decrement", "a_increment_By"]),
    //Call methods from Action
    m_increment() {
      this.$store.dispatch("a_increment");
    },
    m_decrement() {
      this.$store.dispatch({ type: "a_decrement" });
    },
    a_increment_By(val) {
      this.$store.dispatch("a_increment_By", val);
    },
    decrementFromMutations() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style scoped></style>
