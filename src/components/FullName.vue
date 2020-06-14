<template>
  <div>
    <label for="first-name">First name</label>
    <input
      type="text"
      id="first-name"
      class="form-control"
      :value="firstName"
      @input="nameChanged(true, $event)"
    />
    <label for="last-name">Last name</label>
    <input
      type="text"
      id="last-name"
      class="form-control"
      :value="lastName"
      @input="nameChanged(false, $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["value"],
  methods: {
    nameChanged(isFirst: boolean, event: any) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }

      this.$emit("input", name);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
});
</script>

<style></style>
