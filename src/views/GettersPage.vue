<template>
  <div>
    <h1>Getters</h1>
    <!-- <p>To do list done with true :{{ $store.getters.todoListDone }}</p>
    <p>To do list done with fun call :{{ todoListDone }}</p>
    <p>to do list NOT done :{{ todoListNotDone }}</p>
    <p>to do list done length:{{ countDone }}</p>
    <p>get todo list by id :{{ $store.getters.getTodoListById(2) }}</p>
    <p>get todo list by id alis func :{{ getTodoListByID(2) }}</p> -->
    //using mapGetters
    <p>get todo list by id alis func :{{ getTodoListById(2) }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GettersPage",
  computed: {
    //   todoListDone() {
    //     return this.$store.state.toDolist.filter((v) => v.done == true);
    //   },

    // todoListDone() {
    //   return this.$store.getters.todoListDone;
    // },
    // todoListNotDone() {
    //   return this.$store.getters.todoListNOTDone;
    // },
    // countDone() {
    //   return this.$store.getters.countAlltodoListDone;
    // },
    // getTodoListByID() {
    //   return this.$store.getters.getTodoListById;
    // },

    ...mapGetters([
      "todoListDone",
      "todoListNOTDone",
      "countAlltodoListDone",
      "getTodoListById",
    ]),
  },
};
</script>
