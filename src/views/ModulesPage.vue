<template>
  <div>
    <h1>Modules</h1>
    <h3>Number of likes:{{ numOfLikes }}</h3>
    <button @click="a_toggleLikes" v-if="!like">👍</button>
    <button @click="a_toggleLikes" v-if="like">👎</button>
  </div>
</template>

<script>
// import {mapGetters, mapMutations,mapActions,mapState}from "vuex";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModulesPage",
  computed: {
    ...mapGetters(["numOfLikes", "like"]),
  },
  methods: {
    ...mapActions(["a_toggleLikes"]),
  },
};
</script>

<style scoped></style>
