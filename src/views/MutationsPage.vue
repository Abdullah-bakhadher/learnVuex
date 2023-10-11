<template>
  <div>
    <h1>Mutations</h1>
    <h3>{{ $store.state.count }}</h3>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="n_increment(5)">add 5</button>
    <button @click="n_decrement({ decreaseBy5: 5 })">sub 5</button>
    <button @click="multyplayBy5()">multibply count by 5</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "YourComponentName",
  methods: {
    // increment() {
    //   this.$store.state.count++;
    // },
    // decrement() {
    //   this.$store.state.count--;
    // },
    //call the mutation methods
    // increment() {
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   this.$store.commit("decrement");
    // },
    // n_increment() {
    //   this.$store.commit("n_increment", 5);
    // },
    // n_decrement() {
    //   //type, pass an object

    //   this.$store.commit("n_decrement", { decreaseBy5: 5 });
    // },
    // //another way
    // nn_decrement() {
    //   //type, pass an object

    //   this.$store.commit({ type: "n_decrement", decreaseBy5: 5 });
    // },
    ...mapMutations(["increment", "decrement", "n_increment", "n_decrement"]),
    //chang the alis name for the mutationas methods
    ...mapMutations({ incrementBy5: "n_increment" }),
    multyplayBy5() {
      this.$store.state.count *= 5;
    },
  },
};
</script>

<style scoped></style>
