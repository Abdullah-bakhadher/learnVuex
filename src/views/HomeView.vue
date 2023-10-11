<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>First name is : {{ firstName }}</p>
    <p>Full name is : {{ $store.state.fullName }}</p>
    <p>Full name is : {{ fullName }}</p>
    <p>Full name from computed is : {{ fullName }}</p>
    <p v-for="item in todoListItems" :key="item.id">
      To Do list : {{ item.id }}::==> {{ item.ex }}
    </p>
    <p>
      From mapState conbineLocalStateWithVuex: {{ conbineLocalStateWithVuex }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {
      firstName: "Mohammed",
      //this way will not updated if fullname changed
      fullName: this.$store.state.fullName,
      prefix: "Mr.",
    };
  },
  components: {},
  //this way is recomended to us
  // computed: {
  //   fullNameIs() {
  //     return this.$store.state.fullName;
  //   },
  //   todoListItems() {
  //     return this.$store.state.toDolist;
  //   },
  // }  ,

  //mapState is for alis name and to bilnd the computed with the state
  computed: mapState({
    //function call
    // fullNameIs() {
    //   return this.$store.state.fullName;
    // },
    //to make the call as object not function
    fullNameIs: (store) => store.fullName,
    todoListItems() {
      return this.$store.state.toDolist;
    },
    conbineLocalStateWithVuex(state) {
      return this.prefix + state.fullName;
    },
  }),
  //another way to call the states with the same name without using  this.$store.state.toDolist
  // computed: {
  //   fullNameIs() {
  //     return this.$store.state.fullName;
  //   },
  //   todoListItems() {
  //     return this.$store.state.toDolist;
  //   },
  // ...mapState(["toDolist", "fullName ", " count"]),
  // }  ,
};
</script>
