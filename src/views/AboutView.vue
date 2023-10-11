<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ fullName }}</p>
    <p>{{ countFromMapState }}</p>
    <p>full name using alis from state :{{ alisFullname }}</p>
    <p>
      make some opperation on any state like count:{{ compinePlusLocalState }}
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      firstName: "Mohammed",
    };
  },
  components: {},

  //another way to call the states with the same name without using  this.$store.state.toDolist
  computed: {
    fullNameIs() {
      return this.$store.state.fullName;
    },
    todoListItems() {
      return this.$store.state.toDolist;
    },
    ...mapState(
      //["toDolist", "fullName", "count"],
      {
        countFromMapState: (state) => state.count, //arrow function
        alisFullname: "fullName", //alias name for state property
        compinePlusLocalState(anyValue) {
          return anyValue.count + 5;
        },
      }
    ),
  },
};
</script>
